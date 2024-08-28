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
        const scaledY = this.position.y * 2;
        const scaledWidth = this.position.width * aspectRatio;
        const scaledHeight = this.position.height * GameConfig.aspectRatio;

        // Calculate the position to center the ground block on the canvas
        const offsetX = (context.canvas.width - scaledWidth) / 2;
        const offsetY = (context.canvas.height - scaledHeight) / 2;

        // Draw the ground block on the canvas with aspect ratio scaling
        context.strokeStyle = "red";
        context.lineWidth = 2; // Set the line width for the stroke

        context.strokeRect(
            scaledX + offsetX,
            scaledY + offsetY,
            scaledWidth,
            scaledHeight
        );
    }
}
