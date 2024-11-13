/* `✅ Fulfilled promise in ${delay}ms`
   `❌ Rejected promise in ${delay}ms` */
// Описаний у документації

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const delay = form.elements.delay.value;
  // console.log(delay);
  const state = form.elements.state.value;
  // console.log(state);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case 'fulfilled':
          resolve(delay);
          break;

        case 'rejected':
          reject(delay);
          break;
      }
    }, delay);
  })
    .then(value => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        color: 'green',
        position: 'topCenter',
      });
    })
    .catch(value => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        color: 'red',
        position: 'topCenter',
      });
    });
});
