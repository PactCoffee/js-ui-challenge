import { details, brew, address, confirmation } from './templates';

const funnelRoute = [details, brew, address, confirmation];

const name = 'Andy';

function tag(strings, ...values) {
  console.log(strings, values);
}

tag`<div>${name}</div>`;

console.log(funnelRoute);
