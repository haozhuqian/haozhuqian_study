import { CtolRender, TextRender } from "@/utiles/Render";
import cn from 'classnames';
import Ctol, { CtolProps } from "./Ctol";
import Text from '../Text/Text';
import React from "react";
import './Source.css';

function Block(props:CtolProps,ref:React.Ref<HTMLDivElement>) {
  const { render, view, context } = props;
  return (
    <div
      tabIndex={0}
      className={cn('control-source-out', { 'block-focused': render.foced })}
      ref={ref}
      onFocus={(e) => {
        e.stopPropagation();
        context.render.focus(render);
      }}
    >
      <div onClick={() => render.turn()}>{`:[${render.block.key}]:${render.open?'(':''}`}</div>
      <div className={cn('control-source-turn', { 'control-source-close': !render.open })}>
        <div className='control-source-in'
        >
          {render.childs.map((r) =>
            r instanceof CtolRender
              ? <Ctol key={r.key} render={r} view={view} context={context} />
              : <Text key={r.key} render={r as TextRender} view={view} context={context} />
          )}
        </div>
      </div>
      {render.open?<div>{'):'}</div>:null}
    </div>
  )
}
export default React.forwardRef(Block);