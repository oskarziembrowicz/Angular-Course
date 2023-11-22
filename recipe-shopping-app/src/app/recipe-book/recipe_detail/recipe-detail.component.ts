import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('recipeForDetails') recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredientsToShoppingList() {
    // for (let ingredient of this.recipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
