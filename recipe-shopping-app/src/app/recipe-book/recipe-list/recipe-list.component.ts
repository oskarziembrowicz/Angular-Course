import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'),
    new Recipe('A second test recipe', 'This is a second example', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png')
  ];
}
