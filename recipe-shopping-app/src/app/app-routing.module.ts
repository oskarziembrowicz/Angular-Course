import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe_detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  ,
  {
    path: 'recipe-book',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'recipe/new', component: RecipeEditComponent },
      { path: 'recipe/:id', component: RecipeDetailComponent },
      { path: 'recipe/:id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
