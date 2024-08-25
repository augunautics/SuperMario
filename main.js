import SpritesLoader from './js/SpritesLoader.js';
import GameEngine from './js/GameEngine.js';
import GameConfig from './js/GameConfig.js';

const gameEngine = new GameEngine({ SpritesLoader: SpritesLoader, GameConfig: GameConfig });
gameEngine.start();
