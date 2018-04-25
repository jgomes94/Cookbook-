import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers: [ RecipeService ],
})
export class RecipebookComponent implements OnInit {
  @Output() recipeDetailOutput: Recipe;
  showDetail= false;
  constructor(private recipeService: RecipeService) { }

  recipeClicked(recipe: Recipe){
    
    this.recipeDetailOutput = recipe;
    this.showDetail = true;
  }
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
        this.recipeDetailOutput = recipe;
        this.showDetail= true;
     })
  }

  

}
