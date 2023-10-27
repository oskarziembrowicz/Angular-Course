import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @Output() addingIngredient = new EventEmitter<Ingredient>();

  onAddIngredient() {
    this.addingIngredient.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
}
