import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe);
  }
}
