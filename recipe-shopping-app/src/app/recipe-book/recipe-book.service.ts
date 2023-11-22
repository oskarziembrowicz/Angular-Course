import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
    new Recipe(
      'A second test recipe',
      'This is a second example',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'
    ),
  ];

  getRecipes() {
    // returning a copy of recipes array
    return this.recipes.slice();
  }
}
