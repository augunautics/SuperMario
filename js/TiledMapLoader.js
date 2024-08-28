import GroundBlock from './GroundBlock.js';

export default class TiledLoader {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = null;
    }

    async loadJson() {
        try {
            const response = await fetch(this.filePath);
            if (!response.ok) {
                throw new Error(`Failed to load JSON file: ${response.statusText}`);
            }
            this.data = await response.json();
            console.log('Tiled map loaded successfully:', this.data);
        } catch (error) {
            //console.error('Error loading JSON file:', error);
            this.data = null;
        }
    }

    getGroundBlocks() {
        const groundLayer = this.data.layers.find(layer => layer.name === 'ground');
        if (!this.data) {
            console.error('Data not loaded yet');
            return [];
        }

        const groundBlocks = groundLayer.objects.map(objectData => new GroundBlock(objectData));
       
        console.log(groundLayer);
        return groundBlocks;
        
    }
}
