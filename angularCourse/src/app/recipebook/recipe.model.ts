export class Recipe {
    public name: String;
    public description: String;
    public imagePathUrl: String;

    constructor(name: String, desc: String, imagePath: String) {
        this.name = name;
        this.description = desc;
        this.imagePathUrl = imagePath;

    }
}