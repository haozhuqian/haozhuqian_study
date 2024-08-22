import { Context, View } from "@/utiles/Context";
import { CtolRender, Render, TextRender } from "@/utiles/Render";
import cn from 'classnames';
import Ctol from "./Ctol";
import Text from '../Text/Text';
import React from "react";

export type CtolBlockProps = {
  context: Context;
  render: CtolRender;
  view: View;
  childs: Render[];
}
function Block(props:CtolBlockProps,ref:React.Ref<HTMLDivElement>) {
  const { render, view, context,childs } = props;
  return (
    <div
      tabIndex={0}
      style={{
        backgroundColor: render.block.color.bright,
        color: render.block.color.light
      }}
      className={cn('control-block-out', { 'block-focused': render.foced })}
      ref={ref}
      onFocus={(e) => {
        e.stopPropagation();
        context.render.focus(render);
      }}
    >
      <div onClick={() => render.turn()}>{`${render.key}:${render.block.key}`}</div>
      <div className={cn('control-block-turn', { 'control-block-close': !render.open })}>
        <div className='control-block-in'
          style={{
            backgroundColor: render.block.color.light,
            color: render.block.color.dark
          }}
        >
          {childs.map((r) =>
            r instanceof CtolRender
              ? <Ctol key={r.key} render={r} view={view} context={context} />
              : <Text key={r.key} render={r as TextRender} view={view} context={context} />
          )}
        </div>
      </div>
    </div>
  )
}
export default React.forwardRef(Block);