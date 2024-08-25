import GameConfig from './GameConfig.js';
import SpritesLoader from './SpritesLoader.js';
import Background from './Background.js';

export default class GameEngine {
    constructor() {
        this.spritesLoader = new SpritesLoader();

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d'); // Get the 
        document.body.appendChild(this.canvas); // Add the canvas to the document body


        // Create the Background instance without setting the image yet
        this.background = new Background(GameConfig.backgroundData, this.canvas);


    }

    start() {
        this.spritesLoader.loadAllSprites()
            .then(imagesMap => {
                console.log('Sprites are ready to be used in the game.');
                console.log(imagesMap); // This will log the map containing all images with their names as keys

                // Get the world1-1 image from the loaded images and set it to the background
                const world11Image = imagesMap.get(this.background.name)
                // Set the canvas size based on the background image size
                this.canvas.width = world11Image.width;
                this.canvas.height = world11Image.height;
                

                this.background.setImage(world11Image);

                // Draw the background
                this.draw();

                // Now you can use this.background in your game logic
                this.updateGame();
            })
            .catch(error => {
                console.error('There was an issue loading sprites:', error);
            });
    }

    draw() {
        // Call the background's draw method to render it on the canvas
        this.context.fillStyle = "black"; // Set the fill color to black
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); // Fill the entire canvas with black

        this.background.draw(this.context, this.canvas);
    }

    updateGame() {
        // This is where you would update the game state and render the background
        console.log(this.background);
    }
}
