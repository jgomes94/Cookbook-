import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  openBoolean = true;
  @Input() recipeDetail: Recipe;

  flipBoolean() {
    this.openBoolean = !this.openBoolean;
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientShoppingList(this.recipeDetail.ingredients);
  }
  constructor(private recipeService: RecipeService) { }
}
