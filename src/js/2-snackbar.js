// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const btnCreate = document.querySelector('.btn-create');
const inputForm = document.querySelector('.form');


const formSubmit = event => {
    event.preventDefault();

    const delayTime = Number(inputForm.delay.value);
    const radioBtn = inputForm.querySelector('input[name="state"]:checked');
    const chooseBtn = radioBtn.value;

    const promise = new Promise((resolve, reject) => {      
        setTimeout(() => {
          if (chooseBtn === 'fulfilled') {
            resolve(delayTime);
          } else {
          reject(delayTime);
          }
        }, delayTime);
      });
      console.log(promise);

      promise
          .then(function(delay) {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                fontSize: 'large',
                close: true,
                position: 'topRight',
                color: '#59a10d',
                messageColor: 'white',
                icon: false,
            });
          })
          .catch(function(delay) {
            iziToast.error({
                message: `🗙 Rejected promise in ${delay}ms`,
                fontSize: 'large',
                close: true,
                position: 'topRight',
                color: '#ef4040',
                messageColor: 'white',
                icon: false,
            });
        });

        inputForm.reset();

};

  inputForm.addEventListener('submit', formSubmit);