import GameConfig from './GameConfig.js';
import SpritesLoader from './SpritesLoader.js';
import Background from './Background.js';
import Mario from './Mario.js';
import EventHandler from './EventHandler.js';
import JsonTiledLoader from './JsonTiledLoader.js';

export default class GameEngine {
    constructor() {
        this.spritesLoader = new SpritesLoader();

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d'); // Get the context for 2D drawing
        document.body.appendChild(this.canvas); // Add the canvas to the document body

        const jumpCallback = () => {
            // Example jump logic can be added here
        };

        const stopJumpCallback = () => {
            // Example stop jump logic can be added here
        };

        if (!this.eventHandler) {
            this.eventHandler = new EventHandler({
                onJump: jumpCallback,
                onStopJump: stopJumpCallback,
            });
        }

        this.loadMap();

        // Create the Background instance without setting the image yet
        this.background = new Background(GameConfig.backgroundData, this.canvas);
    }

    loadMap() {
        // Load the tiled map using JsonTiledLoader
        this.mapLoader = new JsonTiledLoader(GameConfig.mapFilePath);

        this.mapLoader.loadJson().then(() => {
            if (this.mapLoader.data) {
                console.log('Tiled map loaded successfully:', this.mapLoader.data);

                // Store the ground blocks for later use
                this.groundBlocks = this.mapLoader.getGroundBlocks();
                console.log('Ground blocks:', this.groundBlocks);
            } else {
                console.error('Failed to load the tiled map.');
            }
        });
    }

    start() {
        this.spritesLoader.loadAllSprites()
            .then(imagesMap => {
                console.log('Sprites are ready to be used in the game.');
                console.log(imagesMap); // Log the map containing all images with their names as keys

                // Get the world1-1 image from the loaded images and set it to the background
                const world11Image = imagesMap.get(this.background.name);

                // Set the canvas size based on the background image size
                this.canvas.width = world11Image.width;
                this.canvas.height = world11Image.height;

                this.background.setImage(world11Image);

                // Create the Mario instance using the static marioData from GameConfig
                this.mario = new Mario(GameConfig.marioData);

                // Get the Mario image from the loaded images and set it to the Mario instance
                const marioImage = imagesMap.get(this.mario.name);
                this.mario.setImage(marioImage);
                this.eventHandler.setupListeners();

                // Draw the background
                this.draw();

                // Now you can use this.background in your game logic
                this.updateGame();

                // Start the game loop
                this.animate();
            })
            .catch(error => {
                console.error('There was an issue loading sprites:', error);
            });
    }

    handleScroll() {
        if (this.eventHandler.inputState.right.pressed) {
            console.log('Right key pressed, scrolling...');
            this.background.viewport.x += GameConfig.scrollSpeed; // Adjust scrolling speed as needed
            this.draw(); // Redraw the canvas after updating the viewport
        } else if (this.eventHandler.inputState.left.pressed) {
            console.log('Left key pressed, scrolling...');
            this.background.viewport.x -= GameConfig.scrollSpeed; // Adjust scrolling speed as needed
            this.draw(); // Redraw the canvas after updating the viewport
        }
    }

    animate() {
        // Update the game state
        this.handleScroll();

        // Draw the game
        this.draw();

        // Request the next frame
        requestAnimationFrame(() => this.animate());
    }

    draw() {
        // Clear the canvas before drawing
        this.context.fillStyle = "black"; // Set the fill color to black
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); // Fill the entire canvas with black

        // Draw background and Mario
        this.background.draw(this.context, this.canvas);
        this.mario.draw(this.context, this.canvas);

        // Draw ground blocks
        if (this.groundBlocks) {
            this.groundBlocks.forEach(block => block.draw(this.context));
        }
    }

    updateGame() {
        // This is where you would update the game state and render the background
        console.log(this.background);
        console.log(this.mario);
    }
}
