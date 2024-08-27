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
        if (!this.data) {
            console.error('Data not loaded yet');
            return [];
        }

        const groundLayer = this.data.layers.find(layer => layer.name === 'ground');
        console.log(groundLayer);
        return groundLayer ? groundLayer.objects : [];
        
    }
}
