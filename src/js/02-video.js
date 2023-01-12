import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

  const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const storedTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(JSON.parse(storedTime))
const timeHandler = (event) => {
    
    localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds))
    
}

player.on('timeupdate', throttle(timeHandler,1000))
