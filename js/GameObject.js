// js/GameObject.js

export default class GameObject {
    constructor(data) {
        this.name = data.name;
        this.position = {
            x: data.position.x,
            y: data.position.y,
            width: data.position.width,
            height: data.position.height
        };
        this.crop = {
            x: data.crop.x,
            y: data.crop.y,
            width: data.crop.width,
            height: data.crop.height
        };

        this.image = null; // Initially null, will be set using setImage()
    }

    setImage(image) {
        this.image = image;
    }
}