import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h3>New Food</h3>
      <div>
        <label>Enter a new Meal name:</label>
          <input #newName class="form-control">
        <label>Food Calories:</label>
          <input #newCalories class="form-control">
        <label>Enter a Description:</label>
          <input #newDescription class="form-control">
      </div>
        <button (click)="submitForm(newName.value, newCalories.value, newDescription.value); newName.value=''; newCalories.value='';  newDescription.value='';">Add</button>
    `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, calories: number, description: string) {
    var newFoodToAdd: Food = new Food(name, calories, description);
    this.newFoodSender.emit(newFoodToAdd);
  }


}
