import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookService],
})
export class RecipeBookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
