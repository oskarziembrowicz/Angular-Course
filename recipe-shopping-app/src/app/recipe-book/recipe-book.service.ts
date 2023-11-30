import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A very tasty and delicious Schnitzel',
      'https://imgs.search.brave.com/FdUVAlcoqCWt25pGvoQvx8v9W_cmayYYD_L2zvpasLo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/OTU4MTk3OS9waG90/by9jaGlja2VuLXNj/aG5pdHplbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZVJn/eFFMVDlhdlA3eGVK/Y3htX25HcDE5cFlh/WHRKZlllQUg0TEE1/Vk10az0',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'Big Burger',
      'Probably one of the best things in the world',
      'https://imgs.search.brave.com/LTw0etsujNuP_Yh2xFgQruMO3Sk9MtgmDnN-uZEvMKo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk1/NTQ1NzA4L3Bob3Rv/L2NoZWVzZWJ1cmdl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MUcybm5qUS1M/S0M1cm4tRFAwZEVs/aWc2bmtGNG1mdW1Z/dnpHV2x3X0huQT0',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Beef', 1),
        new Ingredient('Tomatoe', 1),
        new Ingredient('Salad', 1),
      ]
    ),
  ];

  getRecipes() {
    // returning a copy of recipes array
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
