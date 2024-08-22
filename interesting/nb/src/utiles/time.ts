/** 防抖函数 */
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: number | null = null;
  return function (...args: any[]) {
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn(...args);
    }, delay);
  } as T;
}
/** 节流函数 */
export function throttle<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: number | null = null;
  return function (...args: any[]) {
    if (timer) return;
    fn(...args);
    timer = window.setTimeout(() => {
      timer = null;
    }, delay);
  } as T;
}
/** 稍后执行函数 */
export function then<T>(cb: () => T) {
  return Promise.resolve().then(cb)
}

/** 等待执行函数 */
export function wait(time: number): Promise<undefined> {
  return new Promise((res) => { setTimeout(() => res(undefined), time) })
}