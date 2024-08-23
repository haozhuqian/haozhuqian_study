import { useEffect, useRef, useState } from 'react';
import { Context, View, ViewState } from '@/utiles/Context';
import { TextRender } from '@/utiles/Render';
import TextBlockView from './Block';
import TextSourceView from './Source';
import CtolPreView from './Preview';

export type TextProps = {
  context: Context;
  render: TextRender;
  view: View;
}


const Views: { [k in ViewState]: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLDivElement>> } = {
  source: TextSourceView,
  block: TextBlockView,
  preview: CtolPreView
}

export default function Text(props: TextProps) {
  const { render, view, context } = props;
  const [_foced, setFoced] = useState<boolean>(render.foced);
  const [_text, setText] = useState<string>(render.text);
  const TextBlockRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    render.init(view.name, TextBlockRef.current!, setFoced, setText)
  }, [])
  const NowView = Views[view.state];
  return (
    <NowView
      context={context}
      render={render}
      view={view}
      ref={TextBlockRef}
    />
  )
}
