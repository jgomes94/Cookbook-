import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg'),
    new Recipe('A New Test Recipe', 'Another description',
    'https://www.recipetineats.com/wp-content/uploads/2017/11/Thai-Chicken-Salad-1-680x952.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
