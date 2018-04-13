import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() clickRecipe: EventEmitter<void> = new EventEmitter();

  recipeClicked(recipe: Recipe){
    this.clickRecipe.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
