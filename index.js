const {fork, spawn} = require('child_process');

const childprocess = fork('slave.js'); //spawn('node slave.js')

childprocess.send({go:'go'});

childprocess.on('message',(msg)=>{
console.log('from c',msg);

});

let ct=0;
setInterval(() => {
    ct++
    if(ct===5)
    childprocess.kill()
    
}, 1000);

childprocess.on('exit',(msg)=>{
    console.log('ex',msg);
    
    });