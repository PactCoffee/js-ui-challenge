import { details, brew, address, confirmation } from './templates';

const funnelRoute = [details, brew, address, confirmation];
let frame = -1;
const direction = 'vertical';

const body = document.querySelector('body')
addFrame(++frame);

function addFrame(no) {
  body.insertAdjacentHTML('beforeend', funnelRoute[no]);
  const frames = document.querySelectorAll('.frame');
  frames[no].scrollIntoView();
}

function scrollToNext(e) {
  e.preventDefault();
  this.innerHTML += 'dddd';
}

body.addEventListener('click', function (e) {
  if (e.target.classList.contains('next')) {
    addFrame(++frame);
  }
});