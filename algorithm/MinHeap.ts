class MinHeap<T>{
  size: number;
  private readonly h: T[];
  private readonly min: (a: T, b: T) => boolean;
  constructor(min: (a: T, b: T) => boolean) {
      this.h = [null as any];
      this.min = min;
      this.size = 0;
  }
  private down(i: number) {
      const h = this.h, l = h.length, min = this.min;
      let n = i << 1;
      while (n < l) {
          if (n + 1 < l && min(h[n + 1], h[n])) n = n + 1;
          if (min(h[i], h[n])) break;
          [h[i], h[n], i, n] = [h[n], h[i], n, n << 1];
      }
  }
  private up(i: number) {
      const h = this.h;
      let n = i >> 1;
      while (i > 1 && this.min(h[i], h[n]))  [h[i], h[n], i, n] = [h[n], h[i], n, n >> 1];
  }
  push(v: T) {
      this.up(this.h.push(v) - 1);
      this.size = this.h.length - 1;
  }
  pop(): T | undefined {
      const res = this.h[1], last = this.h.pop()!;
      if (last !== res) this.h[1] = last, this.down(1);
      this.size = this.h.length - 1;
      return res;
  }
}