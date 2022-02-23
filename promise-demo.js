let promisevar = new Promise((resolve, reject)=> {
    let a=1+6;
    if (a == 2)
    resolve('Success')
    else 
    reject('Failed')
});

promisevar.then((message)=> {
    console.log(message)
}).catch((message)=> {
    console.log(message)
})

const recordone = new Promise((resolve, reject)=>{
    resolve('record one success');
})

const recordtwo = new Promise((resolve, reject)=>{
    resolve('record two success');
})

const recordthree = new Promise((resolve, reject)=>{
    resolve('record three success');
})

Promise.all([
    recordone,
    recordtwo,
    recordthree
]).then((message)=> {
    console.log(message)
})

Promise.race([
    recordone,
    recordtwo,
    recordthree
]).then((message)=> {
    console.log(message)
})