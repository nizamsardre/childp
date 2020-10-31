

process.on('message',(msg)=>{
    console.log('c means from m',msg);
    
    })

    let k=0;

    setInterval(() =>{
        k++;
        process.send(k)
        if(k===10)
            process.exit();

    },1000)