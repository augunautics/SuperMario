import GameObject from './GameObject.js';

export default class Mario extends GameObject {
    constructor(data) {
        super(data); // Call the parent class's constructor with the data
        // Additional Mario-specific properties can be added here if needed
    }

    draw(context, canvas) {
        if (this.image) {
            // Variables for source (crop area of the image)
            const sourceX = this.crop.x;
            const sourceY = this.crop.y;
            const sourceWidth = this.crop.width;
            const sourceHeight = this.crop.height;
    
            // Variables for destination (where on the canvas the image is drawn)
            const destX = this.position.x;
            const destY = this.position.y;
            const destWidth = this.position.width;
            const destHeight = this.position.height;
    
            // Draw Mario using the variables
            context.drawImage(
                this.image,
                sourceX, sourceY,    // Source x, y (crop position)
                sourceWidth, sourceHeight,  // Source width, height (crop dimensions)
                destX, destY,        // Destination x, y on canvas
                destWidth, destHeight // Destination width, height on canvas
            );

            // Draw a red box around Mario
            context.strokeStyle = 'red'; // Set the border color to red
            context.lineWidth = 2; // Set the border width
            context.strokeRect(destX, destY, destWidth, destHeight); // Draw the border around Mario
        }
    }
}
