import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppinglistComponent },
    { path: 'recipes', component: RecipebookComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}