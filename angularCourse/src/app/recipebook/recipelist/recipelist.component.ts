import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent {
  @Output() clickRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg'),
    new Recipe('A New Test Recipe 2', 'Another description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg'),
    new Recipe('A New Test Recipe 3', 'Yet Another description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg')
  ];
  recipeClicked(recipe: Recipe){
    this.clickRecipe.emit({name: recipe.name, description: recipe.description, imagePathUrl: recipe.imagePathUrl});
  }


  constructor() { }

}
