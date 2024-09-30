const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentTrackDisplay = document.getElementById('currentTrack');

const tracks = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3'
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audioPlayer.src = tracks[index];
    currentTrackDisplay.textContent = 'Track: ' + tracks[index].split('/').pop();
}

function playPauseTrack() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

playPauseBtn.addEventListener('click', playPauseTrack);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// Load the first track on page load
loadTrack(currentTrackIndex);
