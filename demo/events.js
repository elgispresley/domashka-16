const EventEmitter = require('events');

const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('On: anything', data)
// })

// emitter.emit( 'anything',  {a: 1});
// emitter.emit( 'anything',  {a: 2});

// setTimeout(() =>{
//     emitter.emit('anything', {c: 3})
// }, 1500)

class Dispatcher extends EventEmitter{
    subscribe(eventName, cb){
       console.log('[Subscribe...]')
       this.on(eventName, cb)
    }
    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dispatch = new Dispatcher()


dispatch.subscribe('aa', data => {
    console.log('ON: aa', data)
})
dispatch.dispatch('aa', {aa: 22})