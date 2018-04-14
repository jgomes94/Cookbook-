import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  openBoolean = true;
  @Input() recipeDetail: Recipe;

  constructor() { }

  flipBoolean() {
    this.openBoolean = !this.openBoolean;
  }


}
