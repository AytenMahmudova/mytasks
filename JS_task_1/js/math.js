for (let i=1; i<=100; i++){
    if(i<=10){
        console.log(`${i}: ${i % 5}`);
    }
    else if(i>10 && i%5==0 && (i%7)%2==0){
        console.log(i);
    }  
    else {
        console.log(`${i}: ${i % 5}`);
    }    
    }
    
