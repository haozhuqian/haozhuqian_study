export class EventBus {
  private events = new Map<number, Set<() => void>>();
  add(event: number, cb: () => void) {
    const cbs = this.events.get(event) || new Set<() => void>();
    cbs.add(cb);
  }
  use(event: number) {
    const cbs = this.events.get(event);
    if(cbs) cbs.forEach(cb => cb());
  }
  del(event: number, cb: () => void) {
    const cbs = this.events.get(event);
    if(!cbs) return;
    cbs.delete(cb);
    if(cbs.size===0) this.events.delete(event);
  }
  one(event: number, cb: () => void) {
    const oneCb = () => { 
      cb();
      this.del(event, oneCb);
    }
    this.add(event, oneCb);
  }
}