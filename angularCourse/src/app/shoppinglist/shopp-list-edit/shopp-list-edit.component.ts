import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';


@Component({
  selector: 'app-shopp-list-edit',
  templateUrl: './shopp-list-edit.component.html',
  styleUrls: ['./shopp-list-edit.component.css']
})
export class ShoppListEditComponent {
  ingredient: Ingredient;
  
  @Output() ingredientEmmit: EventEmitter<any> = new EventEmitter();
 

  addIngredient(nameInputHTML, amountInputHTML){
    this.ingredient = {name: nameInputHTML.value, amount: amountInputHTML.value};
    this.ShoppingService.addIngredient(this.ingredient);
  }
 

  constructor(private ShoppingService : ShoppinglistService) { }


}
