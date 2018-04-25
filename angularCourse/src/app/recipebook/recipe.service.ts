import { Injectable, EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg',
    [new Ingredient('pimentao', 5), new Ingredient('maça', 5)]),
    new Recipe('A New Test Recipe 2', 'Another description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg',
    [new Ingredient('alface', 5), new Ingredient('rucula', 5)]),
    new Recipe('A New Test Recipe 3', 'Yet Another description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg',
    [new Ingredient('tomato', 5), new Ingredient('sal', 5)])
  ];
  constructor(private shoppingService: ShoppinglistService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);

  }
}
