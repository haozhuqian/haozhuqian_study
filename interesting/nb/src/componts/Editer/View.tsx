import { Context, View, ViewState, ViewStateNames } from '@/utiles/Context';
import Ctol from './com/Ctol/Ctol';
import './View.css';
import { CtolRender } from '@/utiles/Render';
import cn from 'classnames';

export type ViewProps = {
  render: CtolRender;
  context: Context;
  view: View;
}
export default function Editer(props: ViewProps) {
  const { render, view, context } = props;
  return (
    <div className="view">
      <div className="view-state">
        {ViewStateNames.map(name => (
          <div
            className={cn('view-state-button',{selected:view.state===name})}
            key={name}
            onClick={() => {
              view.state = ViewState[name];
              context.renewV();
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <Ctol render={render} view={view} context={context} />
    </div>
  )
}