const r = Math.random,f = Math.floor;
export function getColor() {
  /** 色彩值 */
  let h = f(r() * 360);
  /** 灰度 */
  let s = f(r() * 10);
  /** 亮度 */
  let v = f(r() * 10);
  return {
    dark: `hsl(${h}, ${s*20+10}%, ${v*2+10}%)`,
    bright: `hsl(${h}, ${s*30+60}%, ${v*2+30}%)`,
    light: `hsl(${h}, ${s*20+10}%, ${v*2+80}%)`,
  };
}