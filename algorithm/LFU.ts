class N {
    k: number; t: number; private v: number; p: N|null; n: N|null;
    constructor(o?: { k?: number, t?: number, v?: number, p?: N, n?: N }) {
        this.k = (o && o.k) ?? NaN;
        this.t = o && o.t || 0;
        this.v = o && o.v || NaN;
        this.p = o && o.p || null;
        this.n = o && o.n || null;
    }
    V(v?: number) {
        ++this.t;
        if (v===undefined) return this.v;
        this.v = v;
        return;
    }
    static connect = (...ns: N[]) => {
        if (!ns.length) return;
        ns.reduce((p, n) => {
            if (n) n.p = p;
            if (p) p.n = n;
            return n;
        })
    }
}
class DL {
    l: number; private o: N;
    constructor() {
        this.l = 0;
        this.o = new N({});
        N.connect(this.o, this.o);
    }
    pop() {
        if (!this.l) return null;
        const n = this.o.p;
        N.connect(this.o.p!.p!, this.o);
        --this.l;
        return n;
    }
    push(n: N) {
        N.connect(this.o, n, this.o.n!);
        console.log('push',this.o.k,this.o.t);
        return ++this.l;
    }
}

class LFUCache {
    private tm: Map<number, DL>;
    private km: Map<number, N>;
    private min: number;
    size: number;
    constructor(private max: number) {
        this.km = new Map();
        this.tm = new Map();
        this.min = 0;
        this.size = 0;
    }

    get(k: number): number {
        if (!this.km.has(k)) return -1;
        return this.update(k)!;
    }

    put(k: number, v: number): void {
        if (this.km.has(k)) return this.update(k, v) as undefined;
        if (this.size === this.max) {
            const l = this.tm.get(this.min)!;
            const n = l.pop()!;
            if (!l.l) this.tm.delete(this.min);
            this.km.delete(n.k);
            --this.size;
        }
        const n = new N({ k });
        n.V(v);
        this.km.set(k, n);
        let l = this.tm.get(1) || new DL();
        l.push(n);
        this.tm.set(1, l);
        this.min = 1;
        ++this.size;
    }
    update(k: number, v?: number) {
        const n = this.km.get(k)!;
        N.connect(n.p!, n.n!);
        if (n.t === this.min) {
            if (this.tm.get(n.t)!.l === 1) {
                this.tm.delete(n.t);
                ++this.min;
            } else --this.tm.get(n.t)!.l;
        }
        const l = this.tm.get(n.t + 1) || new DL;
        l.push(n);
        this.tm.set(n.t+1,l);
        return n.V(v);
    }
}
