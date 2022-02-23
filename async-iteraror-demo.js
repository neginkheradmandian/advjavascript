var arr=['a', 'b', 'c'];

function concat(y) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            let added = 'add' + y;
            resolve(added)
        } , 500);
    })

}

async function delayedIterator(x) {
    var newarr = [];
    for (const elem of x) {
        const newElem = await concat(elem);
        newarr.push(newElem);
    }
    console.log(newarr);
}
delayedIterator(arr);