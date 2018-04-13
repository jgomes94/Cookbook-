import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopp-list-edit',
  templateUrl: './shopp-list-edit.component.html',
  styleUrls: ['./shopp-list-edit.component.css']
})
export class ShoppListEditComponent {
  ingredient: Ingredient;
  
  @Output() ingredientEmmit: EventEmitter<any> = new EventEmitter();
 

  addIngredient(nameInputHTML, amountInputHTML){
    this.ingredientEmmit.emit({name: nameInputHTML.value, amount: amountInputHTML.value, operation: 'add'});
  }
  clearIngredient(nameInputHTML, amountInputHTML){
    nameInputHTML.value = '';
    amountInputHTML.value ='';
  }
  deleteIngredient(nameInputHTML, amountInputHTML){
    this.ingredientEmmit.emit({name: nameInputHTML.value, amount: amountInputHTML.value, operation: 'remove'});
  }

  constructor() { }


}
