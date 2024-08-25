export default class SpritesLoader {
    constructor(imagePath) {
        this.imagePath = imagePath;
        this.image = new Image();
        // Return a promise that resolves when the image loads
        this.promise = new Promise((resolve, reject) => {
            this.image.onload = () => {
                console.log(`Loaded ${this.imagePath}`);
                resolve(this.image);
            };
            this.image.onerror = () => {
                console.error(`Error loading ${this.imagePath}`);
                reject(new Error(`Failed to load ${this.imagePath}`));
            };
            this.image.src = this.imagePath;
        });
    }
}
