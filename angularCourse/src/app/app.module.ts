

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeItemComponent } from './recipebook/recipelist/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { ShoppListEditComponent } from './shoppinglist/shopp-list-edit/shopp-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppinglistService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppListEditComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [ShoppinglistService],
  bootstrap: [AppComponent]

})

export class AppModule {

}
