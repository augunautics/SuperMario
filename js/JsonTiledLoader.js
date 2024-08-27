import GroundBlock from './GroundBlock.js';

export default class JsonTiledLoader {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = null;
        this.groundBlocks = [];
    }

    async loadJson() {
        try {
            const response = await fetch(this.filePath);
            this.data = await response.json();

            // After loading JSON, initialize the ground blocks
            this.initializeGroundBlocks();
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    }

    initializeGroundBlocks() {
        const groundLayer = this.data.layers.find(layer => layer.name === 'ground');
        const groundObjectsData = groundLayer ? groundLayer.objects : [];
        this.groundBlocks = groundObjectsData.map(objectData => new GroundBlock(objectData));
    }

    getGroundBlocks() {
        return this.groundBlocks;
    }
}
