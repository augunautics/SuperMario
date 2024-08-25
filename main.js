import SpritesLoader from './js/SpritesLoader.js';
import GameConfig  from './js/GameConfig.js';

// Load and manage sprite loading promises
const loadPromises = GameConfig.spritesUrls.map(url => {
    const spriteLoader = new SpritesLoader(url);
    return spriteLoader.promise;
});

// Wait for all sprites to load
Promise.all(loadPromises)
    .then(images => {
        console.log('All sprites loaded successfully!');
        // Here you can handle the loaded images, e.g., storing them, preparing for game start, etc.
    })
    .catch(error => {
        console.error('Failed to load one or more sprites:', error);
    });
