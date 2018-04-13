import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent  {
  ingredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  changeIngredient(event: any){
    console.log('event');
    console.log(event);
    if(event.operation === 'add'){
      this.ingredient = new Ingredient(event.name,event.amount);
      this.ingredients.push(this.ingredient);
    }
    if(event.operation === 'remove'){
      var i = 0;
      console.log('trying to remove: '+ event.name);
      for (let ingredient of this.ingredients) {
        if(ingredient.name === event.name){
          this.ingredients.splice(i, 1);
        }
        i++;
    }
    
  }
}

  constructor() { }


}
