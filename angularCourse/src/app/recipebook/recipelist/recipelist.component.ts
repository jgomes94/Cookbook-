import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppinglistService } from '../../shoppinglist/shoppinglist.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})

export class RecipelistComponent implements OnInit {
 

  recipes: Recipe[];


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  constructor(private recipeService: RecipeService, private shoppingService: ShoppinglistService) { }



}
