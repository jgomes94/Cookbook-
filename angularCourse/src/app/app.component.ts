import { Component } from '@angular/core';
import { RouterModule } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  showShoppingList: Boolean = true;
  showRecipes: Boolean = false;

  processHeader(event){
    if(event === 'recipes'){
      this.showShoppingList = true;
      this.showRecipes = false;
    }else{
      this.showShoppingList = false;
      this.showRecipes = true;
    }
  }
}
