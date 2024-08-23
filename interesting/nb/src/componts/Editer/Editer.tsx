import { useEffect, useRef, useState } from 'react'
import { Context } from '@/utiles/Context';
import './Editer.css';
import { CtolRender, } from '@/utiles/Render';
import { BlockDefItem, TextItem } from '@/utiles/ParseTool';
import { CtolBlock } from '@/utiles/Block';
import View from './View';

export type EditerProps = {
  blockKey: number;
}

const keyEvent = new Map<string, (context: Context) => void>([
  ['ArrowUp', (context: Context) => {
    const render = context.render.current;
    if ((!render) || (!render.parent)) return;
    if (render.before) context.render.focus(render.before);
  }],
  ['ArrowDown', (context: Context) => {
    const render = context.render.current;
    if ((!render) || (!render.parent)) return;
    if (render.after) context.render.focus(render.after);
  }],
  ['ArrowRight', (context: Context) => {
    const render = context.render.current;
    if ((!render)) return;
    if (render instanceof CtolRender) {
      context.render.focus(render.childs[0]);
    }
  }], ['ArrowLeft', (context: Context) => {
    const render = context.render.current;
    if (render && render.parent) {
      context.render.focus(render.parent);
    }
  }]
]);

const buttons: ({
  className: string,
  onClick: (c: Context) => void,
  text: string,
})[] = [
    {
      className: 'i-material-symbols-add-box',
      onClick: (context: Context) => {
        context.newN();
      },
      text: '添加编辑视图'
    },
    {
      className: 'i-ion-close',
      onClick: (context: Context) => {
        const render = context.render.current;
        if (!render) return;
        render.delY();
      },
      text: '删了它'
    }, {
      className: 'i-basil-add-outline',
      onClick: (context: Context) => {
        const render = context.render.current;
        if ((!render) || (!render.parent)) return;
        const newB = context.block.newB(new BlockDefItem(context.block.Ctol.newK(), []));
        (newB as CtolBlock).childs = [render.block];
        render.replaceY([newB]);
      },
      text: '框一个块在外面'
    }, {
      className: 'i-ion-ios-add',
      onClick: (context: Context) => {
        const render = context.render.current;
        if ((!render) || (!render.parent)) return;
        render.addAfterY([context.block.newB(new TextItem(''))]);
      },
      text: '此块后添加文本块'
    }, {
      className: 'i-ion-ios-add-circle-outline',
      onClick: (context: Context) => {
        const render = context.render.current;
        if ((!render) || (!render.parent)) return;
        render.addAfterY([
          context.block.newB(new BlockDefItem(
            context.block.Ctol.newK(),
            [new TextItem('')]
          ))
        ]);
      },
      text: '此块后添加控制块'
    }, {
      className: 'i-ion-chevron-back-circle-outline',
      onClick: keyEvent.get('ArrowLeft')!,
      text: '焦点移动到父块'
    }, {
      className: 'i-ion-chevron-forward-circle-outline',
      onClick: keyEvent.get('ArrowRight')!,
      text: '焦点移动到子块'
    }, {
      className: 'i-ion-chevron-up-circle-outline',
      onClick: keyEvent.get('ArrowUp')!,
      text: '焦点上移'
    }, {
      className: 'i-ion-chevron-down-circle-outline',
      onClick: keyEvent.get('ArrowDown')!,
      text: '焦点下移'
    }
  ]

export default function Editer(props: EditerProps) {
  const con = useRef<{ v: null | Context }>({ v: null });
  const rootRef = useRef<HTMLDivElement>(null);
  if (!con.current.v) con.current.v = new Context(props.blockKey);
  const context = con.current.v!;
  const [views, setViews] = useState(con.current.v!.getViews());
  useEffect(() => {
    con.current.v!.init(setViews);
  }, [])
  return (
    <div
      className="editer"
      tabIndex={0}
      ref={rootRef}
      onKeyUp={(e) => {
        const render = context.render.current;
        if (!render) return;
        if (e.ctrlKey && keyEvent.has(e.key)) {
          rootRef.current?.focus();
          keyEvent.get(e.key)!(context);
        } else if (e.key = 'Control') {
          context.render.current?.ref.get(context.current)?.focus();
        }
      }}
    >
      <div className='editer-buttons'>
        {buttons.map(b => <button key={b.text} className={b.className} onClick={() => b.onClick(context)}></button>)}
      </div>
      <div className='editer-views'>
        {views.map((view) => (
          <View
            key={view.name}
            render={context.render.root as CtolRender}
            view={view}
            context={context}
          />
        ))}
      </div>
    </div>
  )
}