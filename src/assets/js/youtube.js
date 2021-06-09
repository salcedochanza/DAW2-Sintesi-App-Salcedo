var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var timeout;
var time = 0;
var i = false;

function startVideo(video){
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: video,
        events: {
          'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function playVideo() {
    player.playVideo();
    document.getElementById('pauseButtonDiv').style = "display:block";
    document.getElementById('playButtonDiv').style = "display:none";
}
function pauseVideo() {
    player.pauseVideo();
    document.getElementById('pauseButtonDiv').style = "display:none";
    document.getElementById('playButtonDiv').style = "display:block";
}
function stopVideo() {
    document.getElementById('searchDiv').style = "display:block";
    player.stopVideo();
    document.getElementById('pauseButtonDiv').style = "display:none";
    document.getElementById('playButtonDiv').style = "display:block";
}

function changeVolume() {
    player.setVolume(document.getElementById('volumeInput').value);
}

// function searchVideo() {
//     document.getElementById('searchDiv').style = "display:none";

//     //localstorage
//     if (localStorage.getItem(document.getElementById('searchBar').value)) {
//         time = localStorage.getItem(document.getElementById('searchBar').value);
//     }

//     if (i == false) {
//         document.getElementById('actionsBar').style = "display:block"
//         player = new YT.Player('player', {
//             height: '360',
//             width: '640',
//             playerVars: { 'controls': 0 },
//             // M7lc1UVf-VE
//             videoId: document.getElementById('searchBar').value,
//             events: {
//                 'onStateChange': onPlayerStateChange
//             }
//         });
//         this.i = true;
//     } else {
//         player.loadVideoById(document.getElementById('searchBar').value, time, "large");
//     }
// }

// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING) {
//         timeout = setInterval(saveSecToLocalStorage, 1000);
//     }
// }

// function saveSecToLocalStorage() {
//     localStorage.setItem(document.getElementById('searchBar').value, player.getCurrentTime());
// }