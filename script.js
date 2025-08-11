let ball = document.querySelector('.ball');
let score = document.querySelectorAll('span');
let Time = document.querySelector('#time');
let btn = document.querySelectorAll('button')
let pop_up = document.querySelector('.prompt'),
    count = 0;
function scor() {
    count++;
    score[0].innerHTML = count;
    ball.style.display = 'none';
}
function start() {
    let clock = 30;
    btn[0].setAttribute('disabled', '');
    let tem = setInterval(() => {
        ball.style.display = 'block';
        let min = 1, max = 270;
        let position_x = Math.floor(Math.random() * (max - min + 1)) + min;
        let position_y = Math.floor(Math.random() * (max - min + 1)) + min;
        ball.style.left = `${position_x}px`;
        ball.style.top = `${position_y}px`;
        --clock;
        Time.innerHTML = ` Time :  00 : ${clock}`
    }, 1000);

    setTimeout(() => {
        btn[0].removeAttribute('disabled', '');
        btn[0].setAttribute('abled', '');
        ball.style.display = 'none'
        clearInterval(tem)
        alert(`Game Over
Your Scor ${count}`);
    }, 30000)

}
function scor() {
    count++;
    score[0].innerHTML = count;
    ball.style.display = 'none';
}
