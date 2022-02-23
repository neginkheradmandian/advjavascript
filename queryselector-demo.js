let element = document.querySelectorAll('button');
element[0].addEventListener('click', function(){
    let output = document.querySelector('.output');
    let input = document.querySelector('input');
    output.innerHTML = '<h1> your output is :' + input.value * 100  + '</h1>';
});

let startGame = document.querySelector('.startGame');

startGame.addEventListener('keydown' , keydown);

function keydown(e) {
    e.preventDefault();
    console.log(e);
}