// copyWithin()批量复制方法，fill() 数组填充方法。
// fill(填充值，填充起始位置索引，填充结束位置索引)方法可以向一个已有的数组中插入全部或部分值
// 开始索引用于指定开始填充的位置，结束索引表示结束填充的位置。
// 如果索引值为为负，则从数组结尾开始算，或者说负索引等于它加上数组长度的值。
const zeros = [0,0,0,0,0];
let re = ()=>{ console.log(zeros);zeros.fill(0)}

//用5填充整个数组
zeros.fill(5);// [ 5, 5, 5, 5, 5 ]
re();

//用3填充索引大于等于3的元素
zeros.fill(6,3);// [ 0, 0, 0, 6, 6 ]
re();

//用1填充索引大于等于1小于3的元素
zeros.fill(1,1,3);// [ 0, 1, 1, 0, 0 ]
re();

zeros.fill(1,-4,-2);// [ 0, 1, 1, 0, 0 ]
re();

// 如果索引值过低或过高，前后位置写反，参数将会被静默忽略。
zeros.fill(1,-10,-1)// [ 1, 1, 1, 1, 0 ]
re();

zeros.fill(2,2,10);// [ 0, 0, 2, 2, 2 ]
re();

zeros.fill(3,3,1);// [ 0, 0, 0, 0, 0 ]
re()

// copyWithin(插入位置索引，赋值起始索引，赋值结束索引)会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置

let ints;
ints = [0,1,2,3,4,5,6,7,8,9]
re = ()=>{console.log(ints);ints = [0,1,2,3,4,5,6,7,8,9]}

ints.copyWithin(5);// [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
re();

ints.copyWithin(0,5);// [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
re();

ints.copyWithin(4,0,5);// [0, 1, 2, 3, 0, 1, 2, 3, 4, 9]
re();

// 对于负值索引与参数错误的处理与fill函授一致