import { CtolRender, TextRender } from "@/utiles/Render";
import cn from 'classnames';
import Ctol, { CtolProps } from "./Ctol";
import Text from '../Text/Text';
import React from "react";
import './preview.css';

function Block(props: CtolProps, ref: React.Ref<HTMLDivElement>) {
  const { render, view, context } = props;
  return (
    <div
      tabIndex={0}
      className={cn('control-preview-out', { 'block-focused': render.foced })}
      ref={ref}
      onFocus={(e) => {
        e.stopPropagation();
        context.render.focus(render);
      }}
    >
      {render.open ?
        (
          <div className={cn('control-preview-turn', { 'control-preview-close': !render.open })}>
            <div className='control-preview-in'
            >
              {render.childs.map((r) =>
                r instanceof CtolRender
                  ? <Ctol key={r.key} render={r} view={view} context={context} />
                  : <Text key={r.key} render={r as TextRender} view={view} context={context} />
              )}
            </div>
          </div>
        ) :
        <div onClick={() => render.turn()}>{`:[${render.block.key}]:`}</div>
      }
    </div>
  )
}
export default React.forwardRef(Block);