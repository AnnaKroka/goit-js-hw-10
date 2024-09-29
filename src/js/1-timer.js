// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector(".btn-start");
startBtn.setAttribute('disabled', '');
const inputDate = document.querySelector(".time-input");
let dayData = document.querySelector('.value[data-days]');
let hourData = document.querySelector('.value[data-hours]');
let minuteData = document.querySelector('.value[data-minutes]');
let secData = document.querySelector('.value[data-seconds]');

let userSelectedDate = 0;

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            if (selectedDates[0] < new Date()) {
                iziToast.warning({
                    message: '🗙  Please choose a date in the future',
                    position: "topRight",
                    color: '#ef4040',
                    messageColor: 'white',
                    icon: false,
                    });
                startBtn.setAttribute('disabled', '');
                
              } else {
                startBtn.removeAttribute('disabled', '');
                userSelectedDate = selectedDates[0];
              }
        },
      };


flatpickr('#datetime-picker', options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
 
class Timer {
    constructor (onTick) {
        this.isActive = false;
        this.onTick = onTick;
    }

start() {
    if (this.isActive) return;
    this.isActive = true;

    startBtn.setAttribute('disabled', '');
    inputDate.setAttribute('disabled', '');

    let timeDifference = userSelectedDate - new Date();
    this.intervalId = setInterval (() => {
        if (timeDifference >=1000) {
            timeDifference -= 1000;
        } else {
            timeDifference = 0;
            this.stop();
        }
        const startTime = convertMs(timeDifference);
        this.onTick(startTime);
    }, 1000);
}
stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    startBtn.removeAttribute('disabled', '');
    inputDate.removeAttribute('disabled', '');
}
}

function onTick ({days, hours, minutes, seconds}) {
    dayData.innerHTML = addLeadingZero(days);
    hourData.innerHTML = addLeadingZero(hours);
    minuteData.innerHTML = addLeadingZero(minutes);
    secData.innerHTML = addLeadingZero(seconds);
}

const addLeadingZero = value => {
    return String(value).padStart(2, '0');
};


  const timer = new Timer(onTick);
  console.log(timer);

  startBtn.addEventListener('click', () => timer.start());