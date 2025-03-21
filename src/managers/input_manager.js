const Directions = {
    "arrowup": "UP",
    "arrowdown": "DOWN",
    "arrowleft": "LEFT",
    "arrowright": "RIGHT",
    "w": "UP",
    "s": "DOWN",
    "a": "LEFT",
    "d": "RIGHT"
}
export class InputManager{
    currentInput;
    frame_rate = 60;
    frame_interval;
    constructor(){
        this.currentInput = Directions.RIGHT;
        this.initKeyLitener();
    }
    getInput(){
        return this.currentInput;
    }
    getDirection(){
        return Directions[this.currentInput];
    }
    initKeyLitener() {
        addEventListener("keydown", (event) => {
            this.currentInput = event.key
        });
    }
    endKeyListener(){
        removeEventListener("keydown", this.currentInput);
    }
}

export default {
    InputManager,
};