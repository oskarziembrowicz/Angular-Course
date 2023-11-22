import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookService],
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;
}
