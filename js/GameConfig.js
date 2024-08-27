export default class GameConfig {

    static aspectRatio = 4;
    static scrollSpeed = 2;
    static fileName = '../TiledMap.json'
    
    static spritesUrls = [
        './img/enemies.png',
        './img/mario.png',
        './img/world1-1.png',
    ];

    static backgroundData = {
        name: 'world1-1',
        position: { x: 0, y: 0, width: 256, height: 240-32 }, // Position of the background image
        viewport: { x: 0, y: 0, width: 512, height: 480-32 }, // Viewport dimensions
    };

    static marioData = {
        name: 'mario',
        position: { x: 400, y: 816, width: 16*GameConfig.aspectRatio, height: 16*GameConfig.aspectRatio }, // Mario's position and size
        crop: { x: 0, y: 8, width: 16, height: 16 }, // Crop settings for Mario's sprite
    };

  
}
