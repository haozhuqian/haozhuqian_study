import cn from 'classnames';
import React from 'react';
import './Source.css';
import { TextProps } from './Text';

function Block(props:TextProps,ref:React.Ref<HTMLDivElement>) {
  const { render, view, context } = props;
  return (
    <div
      tabIndex={0}
      suppressContentEditableWarning
      className={cn('text-source', { 'block-focused': render.foced })}
      ref={ref}
      contentEditable='plaintext-only'
      onFocus={(e) => {
        e.stopPropagation();
        context.render.focus(render);
      }}
      // onClick={()=>console.log(render)}
      onInput={(e) => {
        // 检查输入时修改的文本节点时候包含块语法，如果包含，则将将其从本文本块删除并上抛到编辑器，
        // console.log((e.nativeEvent as InputEvent));
        render.block.renewT((e.target as HTMLDivElement).innerText, render, view.name);

        // if ((e.nativeEvent as InputEvent).inputType === 'insertFromPaste') {
        //   let paste = window.getSelection()?.getRangeAt(0).commonAncestorContainer as Text;
        //   const lines = (paste.textContent || '').split('\n');
        //   lines.pop();
        //   lines.forEach((l, i) => {
        //     paste.splitText(l.length + i);
        //     paste = paste.nextSibling as Text;
        //   })
        // }
        // const Textarea = TextBlockRef.current!;
        // if (!Textarea.firstChild) return;
        // textP.current = window.getSelection()?.getRangeAt(0).startOffset || textP.current;
        // const current = window.getSelection()?.getRangeAt(0).commonAncestorContainer as Text;
        // const grade = test(current.textContent || '');
        // console.log(window.getSelection()?.getRangeAt(0).commonAncestorContainer);
        // console.log(textP.current)
        // Textarea.innerText = Textarea.innerText;
        // const range = document.createRange();
        // range.setStart(Textarea.firstChild, textP.current);
        // range.collapse(false);
        // const selection = window.getSelection()!;
        // selection.removeAllRanges();
        // selection.addRange(range);
      }}
    >{render.text}
    </div>
  )
}
export default React.forwardRef(Block);