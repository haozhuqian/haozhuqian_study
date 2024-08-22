import { useEffect, useRef, useState } from 'react'
// import Text from '../TextBlock/TextBlock';
// import cn from 'classnames';
import './Ctol.css';
import { CtolRender, Render } from '@/utiles/Render';
import { Context, View } from '@/utiles/Context';
import CtolBlockView from './Block'

export type BlockProps = {
  context: Context;
  render: CtolRender;
  view: View;
}

export default function Ctol(props: BlockProps) {
  const { render, view, context } = props;
  const [_foced, setFoced] = useState<boolean>(render.foced);
  const [_open, setOpen] = useState<boolean>(render.open);
  const [childs, setChilds] = useState<Render[]>(render.childs);
  useEffect(() => {
    render.init(view.name, ControlBlockRef.current!, setFoced, setChilds, setOpen)
  }, []);
  const ControlBlockRef = useRef<HTMLDivElement>(null);
  return (
    <CtolBlockView
      context={context}
      render={render}
      view={view}
      childs={childs}
      ref={ControlBlockRef}
    />
  )
}