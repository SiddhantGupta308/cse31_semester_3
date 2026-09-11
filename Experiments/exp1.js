//part1
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => 
    {
        console.log(`Welcome, ${name}`); 
    });
myEmitter.on('exit', (code) => 
    {
        console.log(`Exit event received. Code: ${code}`); 
    });
myEmitter.emit('greet', 'B.Tech Students');
myEmitter.emit('exit', 0);

//part2
// const EventEmitter = require('events');
const app = new EventEmitter();
app.on('login', (user) => 
    {
        console.log(`${user} logged in`); 
    });
app.on('message', (msg) => 
    {
    console.log(`Message: ${msg}`);
    });
app.emit('login', 'sid');
app.emit('message', 'Welcome to Node.js');