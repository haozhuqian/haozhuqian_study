import { useEffect, useRef, useState } from 'react'
// import Text from '../TextBlock/TextBlock';
// import cn from 'classnames';
import { CtolRender, Render } from '@/utiles/Render';
import { Context, View, ViewState } from '@/utiles/Context';
import CtolBlockView from './Block';
import CtolSourceView from './Source';
import CtolPreView from './preview';

export type CtolProps = {
  context: Context;
  render: CtolRender;
  view: View;
}

const Views: { [k in ViewState]: React.ForwardRefExoticComponent<CtolProps & React.RefAttributes<HTMLDivElement>> } = {
  source: CtolSourceView,
  block: CtolBlockView,
  preview: CtolPreView
}

export default function Ctol(props: CtolProps) {
  const { render, view, context } = props;
  const [_foced, setFoced] = useState<boolean>(render.foced);
  const [_open, setOpen] = useState<boolean>(render.open);
  const [_childs, setChilds] = useState<Render[]>(render.childs);
  useEffect(() => {
    render.init(view.name, ControlBlockRef.current!, setFoced, setChilds, setOpen)
  }, []);
  const ControlBlockRef = useRef<HTMLDivElement>(null);
  const NowView = Views[view.state];
  return (
    <NowView
      context={context}
      render={render}
      view={view}
      ref={ControlBlockRef}
    />
    // view.state === 'source'
    //   ? <CtolSourceView
    //   /> :
    //   <CtolBlockView
    //     context={context}
    //     render={render}
    //     view={view}
    //     ref={ControlBlockRef}
    //   />
  )
}