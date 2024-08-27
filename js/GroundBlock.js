import GameConfig from './GameConfig.js';

export default class GroundBlock {
    constructor(data) {
        this.position = {
            x: data.x,
            y: data.y,
            width: data.width,
            height: data.height
        };

        
    }


    draw(context) {
        //const aspectRatio = GameConfig.aspectRatio;
        const aspectRatio = 1;
        // Apply the aspect ratio scaling to the position and size of the ground block
        const scaledX = this.position.x * aspectRatio;
        const scaledY = this.position.y * aspectRatio;
        const scaledWidth = this.position.width * aspectRatio;
        const scaledHeight = this.position.height * aspectRatio;

        // Set the stroke color for the ground block, for example, red
        context.strokeStyle = "red";
        context.lineWidth = 2; // Set the line width for the stroke

        // Draw the outline of the ground block on the canvas with aspect ratio scaling
        context.strokeRect(scaledX, scaledY, scaledWidth, scaledHeight);
    }
}
