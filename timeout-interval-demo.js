setTimeout(()=> {
    document.getElementById('pid').innerText = 'fateme'
}, 100)
let i = 0;
let id = setInterval(()=> {
    document.getElementById('pid').innerText = i++;

    if (i == 10)
    clearInterval(id);
}, 1000)