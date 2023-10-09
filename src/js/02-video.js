import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
// console.log(STORAGE_KEY);

const iframe = document.querySelector('iframe');
// console.log(iframe);
iframe.style.margin = '20px auto';
iframe.style.display = 'flex';

const player = new Player(iframe);
// console.log(player);

player.on('timeupdate', throttle(updatingTimeLocalStorage, 1000));
function updatingTimeLocalStorage({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
