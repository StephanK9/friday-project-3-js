import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>New Food</h3>
      <div>
        <label>Enter a new Food Description:</label>
        <input #newDescription>
      </div>
      <div>
        <label>Food Calorie range:</label>
        <select #newCalorie>
          <option [value]="500">High Calories</option>
          <option [value]="300">Low Calories</option>
        </select>
        <button (click)="submitForm(newDescription.value, newCalorie.value); newDescription.value='';">Add</button>
      </div>
    `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(description: string, calories: number) {
    var newFoodToAdd: Food = new Food(description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }


}
