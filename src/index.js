import { Game } from './app.js';
const default_user_settings = {
    background_color: '#fefefe',
    snake_body_color: '#000000',
    snake_head_color: '#000000',
    game_difficulty: 'easy',
    frame_rate: 60,
};

//localStorage.setItem("user_settings", localStorage.getItem("user_settings") || JSON.stringify(default_user_settings));
localStorage.setItem("user_settings", JSON.stringify(default_user_settings));
const game = new Game();
game.startGame();