import { EventEmitter } from 'events';

const eventName = 'dratuti';

class MyEvents extends EventEmitter {
  registerHandler(evName: string, cb: () => void) {
    this.on(evName, cb);
  }
  emitEvent(evName: string) {
    this.emit(evName);
  }
}

const emitter = new MyEvents();

emitter.registerHandler('usedUpdated', () => console.log('User was updated'));

emitter.emitEvent('usedUpdated'); // User was update
