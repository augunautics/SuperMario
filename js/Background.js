import GameConfig from './GameConfig.js';

export default class Background {
    constructor(data) {
        this.name = data.name;
        this.position = {
            x: data.position.x,
            y: data.position.y,
            width: data.position.width,
            height: data.position.height
        };
        this.viewport = {
            x: data.viewport.x,
            y: data.viewport.y,
            width: data.viewport.width,
            height: data.viewport.height / 2 // Only show the top half of the image
        };

        this.image = null; // Initially null, will be set using setImage()
    }

    setImage(image) {
        this.image = image;
    }

    setViewport(viewport) {
        this.viewport = {
            x: viewport.x,
            y: viewport.y,
            width: viewport.width,
            height: viewport.height
        };
    }

    draw(context) {
        if (this.image) {
            // Set canvas size to the full window dimensions
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight;

            // Calculate the scaled dimensions for only the top half of the image
            const scaledWidth = this.viewport.width * GameConfig.aspectRatio ;  
            const scaledHeight = this.viewport.height * GameConfig.aspectRatio;  
            // Calculate the position to center the image on the canvas
            const offsetX = (context.canvas.width - scaledWidth) / 2;
            const offsetY = (context.canvas.height - scaledHeight) / 2;

            // Fill the entire canvas with black
            context.fillStyle = "black";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);

            // Draw the scaled image centered on the canvas
            context.drawImage(
                this.image,
                this.viewport.x, this.viewport.y,  // Source x, y (viewport position)
                this.viewport.width, this.viewport.height,  // Source width, height (viewport dimensions)
                offsetX, offsetY,  // Destination x, y on canvas (centered position)
                scaledWidth, scaledHeight  // Destination width, height (scaled to twice the original size)
            );
        }
    }
}
