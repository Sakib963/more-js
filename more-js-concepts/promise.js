const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(56665);
    }
    else{
        reject('No Data Available')
    }
})

// getData.then(data => console.log(data))
getData.then(data => console.log(data + 22))
        .catch(error => console.log(error))