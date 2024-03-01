import click from './click.mp3';
import clickO from './clickO.mp3';
import clickX from './clickX.mp3';
import draw from './draw.mp3';
import resetGame from './resetGame.mp3';
import resetScore from './resetScore.mp3';
import retrieve from './retrieve.mp3';
import save from './save.mp3';
import soundOn from './soundOn.mp3';
import success from './success.mp3';

// const soundClick = new Audio(clickSound);
// soundClick.volume = 0.5;

// const soundGameOver = new Audio(gameOverSound);
// soundGameOver.volume = 0.2;

const clickSound = new Audio(click);
const clickOSound = new Audio(clickO);
const clickXSound = new Audio(clickX);
const drawSound = new Audio(draw);
const resetGameSound = new Audio(resetGame);
const resetScoreSound = new Audio(resetScore);
const retrieveSound = new Audio(retrieve);
const saveSound = new Audio(save);
const soundOnSound = new Audio(soundOn);
const winSound = new Audio(success);

const sounds = {
    clickSound,
    clickOSound,
    clickXSound,
    drawSound,
    resetGameSound,
    resetScoreSound,
    retrieveSound,
    saveSound,
    soundOnSound,
    winSound,
}

export default sounds;