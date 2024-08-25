import SpritesLoader from './js/SpritesLoader.js';
import GameEngine from './js/GameEngine.js';

const gameEngine = new GameEngine({ spritesLoaderClass: SpritesLoader });
gameEngine.start();
