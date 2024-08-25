import GameConfig from './GameConfig.js';

export default class SpritesLoader {
    constructor() {
        const spritesUrls = GameConfig.spritesUrls; // Get the sprites URLs from GameConfig

        this.loadPromises = spritesUrls.map(url => this.loadImage(url));
        this.imagesMap = new Map(); // This will store the loaded images
    }

    loadImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const imageName = this.extractImageName(url);
                this.imagesMap.set(imageName, image); // Store the image in the map with its name as the key
                resolve(image);
            };
            image.onerror = () => reject(new Error(`Failed to load ${url}`));
            image.src = url;
        });
    }

    extractImageName(url) {
        // Extract the image name from the URL (e.g., "mario" from "./img/mario.png")
        return url.split('/').pop().split('.')[0];
    }

    loadAllSprites() {
        // Wait for all sprites to load
        return Promise.all(this.loadPromises)
            .then(images => {
                console.log('All sprites loaded successfully!');
                return this.imagesMap; // Return the map containing all loaded images
            })
            .catch(error => {
                console.error('Failed to load one or more sprites:', error);
                throw error; // Re-throw the error for further handling
            });
    }
}
