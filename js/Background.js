export default class Background {
    constructor(image, position, crop) {
        this.image = image;
        this.position = { position }; // Make a copy to ensure instance independence
        this.crop = {crop }; // Make a copy to ensure instance independence
    }

}
