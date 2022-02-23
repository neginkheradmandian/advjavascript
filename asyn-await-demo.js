async function myDisplay() {
    let myPromise = new Promise(function(resove , reject) {
        setTimeout(function() {
            resove('I love')
        } , 2000);
    });
    document.getElementById('demo').innerHTML = await myPromise;
}
myDisplay();