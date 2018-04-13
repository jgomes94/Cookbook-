import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css']
})
export class RecipebookComponent  {
  @Output() recipeDetailOutput: Recipe;
  showDetail: boolean = false;
  constructor() { }

  recipeClicked(recipe: Recipe){
    console.log('recipe on recipebook');
    console.log(recipe);
    this.recipeDetailOutput = recipe;
    this.showDetail = true;
  }
  

}
