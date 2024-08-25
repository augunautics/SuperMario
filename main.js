import SpritesLoader from './js/SpritesLoader.js';

const spritesLoader = new SpritesLoader();
spritesLoader.loadAllSprites()
    .then(imagesMap => {
        console.log('Sprites are ready to be used in the game.');
        console.log(imagesMap); // This will log the map containing all images with their names as keys
        // Example: Access an image by its name
        const marioImage = imagesMap.get('mario');
        // Now you can use marioImage in your game
    })
    .catch(error => {
        console.error('There was an issue loading sprites:', error);
    });
