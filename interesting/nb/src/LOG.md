由于目前没有找到实现了类似块语法的编辑器类的库，使用没有找到参考，




最初的设想类似于vue的响应式更新，
设想块的定义语法为:[块编号]:(块内容):
块的引用语法为:[块编号]:
这种定义的块，内部又包含了一些文本或者对其他块的引用。
数据库中保存每一个块编号对应的文本。这样每次渲染时请求的都是最新的块文本。

在渲染时，发现，为了更方便的最小化更新范围，需要将块内不属于其他块的文本独立为一个渲染时才有的概念，文本块，为了区分，将上一段中定义的课包含其他块的那一类块称之为控制块。
一个控制块内部会包含若干文本块与控制块引用。

当时设想，只要屏幕上看到的每一个块都来是自对同一个块的内容的引用即可正确渲染了
于是最初版本的文本转块结构的转义函数很快就写好了

但是在测试时想到一种情况，前提，编辑器为了我个人学习react，使用的react作为基本框架，react在渲染同级的块（拥有同一个父级块的块）时，需要key作为标识符做diff用，但是根据前文的设想，会出现一种情况，一个块的多个子块都是对同一个块的引用，这样就会在同级块中产生重复的key（这里将块编号作为了key）。

为解决这个问题，我决定分为两类实例，Render和Block，每一个Render负责屏幕上一个块的更新，状态同步一类的工作。Block类似于“原本”，在Render更新时，将更新后的状态同步到Block，再由Blcok同步到 渲染此Block的Render多个对象上，Render各自触发渲染。

这种设想让我坚信，Render实例化在组件渲染过程中，但是仔细思考下我发现了问题，render实例化发生在组件渲染中，或者说，函数组件执行时，但在父级组件渲染子组件时，就需要RenderKey作为key值。如此考虑下，我决定，单独建立一个RenderKey到BlockKey的映射Map。

同时，我将Render和Renderkey存储在一个全局Map中方便查询，Block和BlockKey也存储在另一个全局Map中，Block实例中用一个Set保留渲染它的Render实例的RenderKey，Render中有一个属性保留它要同步的Block实例的BlockKey。在需要获取实例时，分别通过key在全局Map上获取。

这么做原本只是在获取块引用是可以快速地通过BlockKey获取到对应的Block实例，出于对应的设计对Render也做了一样的处理，后续发现这其实是个很不便于后续扩展的设计，让一些操作变的异常繁琐。

同时，根据BlockKey获取到Block实际上是个异步操作，即你不确定这个块是已经缓存在本地的Map中了，还是需要网络请求才能获取到块内容。因此按照此时的设计，渲染是这样发生的。

首先在编辑器中根据根块编号获取文本，同时先创建一个没有子块的空控制块Block作为临时补位。将BlockKey存入全局BlockKeyMap中，接着在RenderKey到BlockKey的映射Map上注册RenderKey与BlockKey的映射关系。然后将RenderKey作为子组件的key与参数，子组件通过这个RenderKey注册Render实例。在获取到块的实际内容后，更新Block，并更新所有关联的Render。

这些步骤似乎有点繁琐，但好像又不得不这么做。

这样写着，效果最初不错，但是有个问题有待解决。如何检测循环引用，一个想法是为Block添加一个属性保存父Block的块编号，但是一个Block实际上可能存在多个父Block。因此更合适的选择似乎是在Render上保留父RenderKey。然后在试图添加一个块时，遍历父Render获取所有父BlockKey，检查是否与待添加的块Block是否相同。

但是问题又出现了，在多文章块引用中可能出现一种情况。在一篇文章中块1的子块为块2，在另一篇文章编写是，试图在块2中添加块1时，由于在此处块2的父块不是块1，因此它可以在块2内添加块1，这样就会导致之前的文章渲染时出现循环引用。

之后采取的另一种方式是，获取待添加块的所有子代块，任意深度的自带都获取到，然后检查其中是否包含当前块，如果包含，说明此块不能添加，同样使用之前的例子，在新文章编辑时，试图在块2中添加块1，先获取块1的子块，会发现其中有块2，所以块1不能被添加到块2中。

接着编写一些删除块，删除render，添加render的操作。由于之前结构的原因，虽然最终能够运行，但是代码很难改，很难调试。

