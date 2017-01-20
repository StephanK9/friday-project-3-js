import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
      <div *ngIf="childSelectedFood">
        <h3>{{childSelectedFood.description}}</h3>
        <p>Food eaten? {{childSelectedFood.done}}</p>
      <h3>Edit Food Entry</h3>
      <label>Enter Food Description:</label>
      <input [(ngModel)]="childSelectedFood.description">
        <label>Enter your food's calorie count:</label>
        <br>
        <input type="radio" [(ngModel)]="childSelectedFood.calories" [value]="500">Over 500 (High Calories)<br>
        <input type="radio" [(ngModel)]="childSelectedFood.calories" [value]="400">Under 500 (Low Calories)
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
