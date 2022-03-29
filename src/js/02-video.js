    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const LOCALSTORAGE_KEY = "videoplayer-current-time";
    import throttle from 'lodash.throttle';

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
const onPlay = function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
    }
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));