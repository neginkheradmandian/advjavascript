var pass =3;

function add () {
    let x=5;
    return pass+x;
}
console.log(add());

var addTo = function (passed) {
    var add = function(inner) {
        return passed + inner;
        }
        return add;
}

var num = new addTo(4);

console.log(num(20));