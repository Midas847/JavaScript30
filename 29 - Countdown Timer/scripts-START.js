let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayendTime(then);
    displayTime(seconds);
    countdown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft);
    },1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = (seconds % 60);
    const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    //console.log({minutes},{secondsLeft});
    document.title = display;
    timerDisplay.textContent = display;

}

function displayendTime(timestamp){
    const end = new Date(timestamp);
    const minutes = end.getMinutes();
    const hour = end.getHours();
    endTime.textContent = `Be Back At ${hour > 12 ? hour-12 : hour}:${minutes < 10 ? '0': '' }${minutes}`;
}
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click',startTimer));
/*document.customForm.addEventListener('submit',function(e) {
    e.prevenDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});
*/
document.customForm.addEventListener('submit',function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });

  