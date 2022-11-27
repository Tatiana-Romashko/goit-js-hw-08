{
  /* <iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>; */
}
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';
player.on('timeupdate', throttle(onTimeSave, 500));

function onTimeSave() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(localStorageKey, seconds);
      console.log('seconds set: ', seconds);
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
}

function reloaded() {
  if (localStorageKey) {
    const lastSavedTime = localStorage.getItem(localStorageKey);
    player.setCurrentTime(lastSavedTime);
    console.log('time set to the player: ', lastSavedTime);
    console.log('the page is reloaded');
  }
}

window.onload = function () {
  const loaded = sessionStorage.getItem('loaded');
  if (loaded) {
    reloaded();
  } else {
    sessionStorage.setItem('loaded', true);
  }
};
