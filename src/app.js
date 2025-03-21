import { InputManager } from './managers/input_manager.js';
const inputManager = new InputManager();

const gameScreen = document.querySelector('#game-screen');


const game_settings = JSON.parse(localStorage.getItem("user_settings"));
export class Game {
    game_width = 400;
    game_height = 400;
    canvas;
    context;
    background_color;
    frame_rate;
    interval;
    constructor() {
        this.background_color = game_settings.background_color;
        this.frame_rate = game_settings.frame_rate;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        gameScreen.appendChild(this.canvas);
        this.canvas.width = this.game_width;
        this.canvas.height = this.game_height;
        this.canvas.style.border = '4px solid #000';
        this.canvas.style.backgroundColor = this.background_color;
        this.context.fillStyle = this.background_color;
    }
    startGame() {
        console.log('Game started');
        this.gameLoop();
    }
    gameLoop() {
        
    }
}