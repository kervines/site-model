const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg = document.querySelector('#msg');
const button = document.querySelector('#submit');

form.addEventListener('submit', () => {
  sendWpp();
});

const sendWpp = () => {
  let urlSend =
    'https://wa.me/5585986822545?text=' +
    '*Formulário de Contato*' +
    '%0a' +
    '%0a' +
    '*Name*: ' +
    name.value +
    '%0a' +
    '*E-mail*: ' +
    email.value +
    '%0a' +
    '*Phone*: ' +
    phone.value +
    '%0a' +
    '*Mensagem*: ' +
    msg.value;
  window.open(urlSend, '_blank');
};
