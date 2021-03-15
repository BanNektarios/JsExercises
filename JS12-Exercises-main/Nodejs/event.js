const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('customEvent', (message, user) => {
    console.log(`${user}: ${message}`)
})

emitter.emit('customEvent', 'Hello world', 'Computer')
emitter.emit('customEvent', 'That\'s pretty cool', 'Nektarios')

process.stdin.on('data', data => {

    const input = data.toString().trim();
    if (input === 'exit') {
        emitter.emit('customEvent', 'Goodbye!', 'terminal')
        process.exit()
    }
    emitter.emit('customEvent', input, 'terminal')
})