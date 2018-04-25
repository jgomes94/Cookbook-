import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
    public name: String;
    public description: String;
    public imagePathUrl: String;
    public ingredients: Ingredient [];

    constructor(name: String, desc: String, imagePath: String, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePathUrl = imagePath;
        this.ingredients = ingredients;

    }
}
