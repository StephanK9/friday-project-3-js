import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
      <div *ngIf="childSelectedFood">
      <h3>Edit Food Entry</h3>
      <label>Enter Food Name:</label>
      <input [(ngModel)]="childSelectedFood.name" class="form-control">
        <label>Enter your food's calorie count:</label>
        <input [(ngModel)]="childSelectedFood.calories" class="form-control">

        <label>Enter a description for the meal</label>
        <input [(ngModel)]="childSelectedFood.description" class="form-control">
          
        <button (click)= "doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
