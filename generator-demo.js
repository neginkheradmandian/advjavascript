function* generatorfun() {
    yield 1;
    yield 2;
    yield 3;
}
const genfun = generatorfun();
console.log(genfun.next());
console.log(genfun.return());
console.log(genfun.throw())