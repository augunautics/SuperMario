export default class GameConfig {
    static spritesUrls = [
        './img/enemies.png',
        './img/mario.png',
        './img/world1-1.png',
    ];

    static backgroundData = {
        name: 'world1-1',
        position: { x: 0, y: 0, width: 256, height: 240 }, // Position of the background image
        viewport: { x: 0, y: 0, width: 512, height: 480 }, // Viewport dimensions
    };

    static aspectRatio = 2;
    static scrollSpeed = 2;
}
