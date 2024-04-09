class PriorityQueue<T>{
    private size: number;
    private readonly h: T[];
    constructor(private readonly pre: (a: T, b: T) => number) {
        this.h = [];
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    private down(i: number) {
        const h = this.h, l = this.size + 1, pre = this.pre;
        let n = i << 1;
        while (n < l) {
            if (n + 1 < l && pre(h[n + 1], h[n]) > 0) n = n + 1;
            if (pre(h[i], h[n]) > 0) break;
            [h[i], h[n], i, n] = [h[n], h[i], n, n << 1];
        }
    }
    private up(i: number) {
        const h = this.h;
        let n = i >> 1;
        while (i > 0 && this.pre(h[i], h[n]) > 0) [h[i], h[n], i, n] = [h[n], h[i], n, n >> 1];
    }
    push(v: T) {
        this.h[++this.size] = v;
        this.up(this.size);
    }
    peek(): T | undefined {
        return this.h[1];
    }
    pop(): T | undefined {
        if (!this.size) return;
        const res = this.h[1];
        this.h[1] = this.h[this.size];
        this.down(1);
        --this.size;
        return res;
    }
}