const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function handleTimeUpdate(data) {
  const seconds = data.seconds;
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

try {
  const savedTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
} catch (error) {
  console.error('Error loading saved time:', error);
}
