import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allFoods">All Meals</option>
      <option value="completedFoods">Meals you ate</option>
      <option value="incompleteFoods" selected="selected">Meals you are planning to eat</option>
    </select>

    <ul>
      <li (click)="isDone(currentFood)" *ngFor="let currentFood of childFoodList | completeness:filterByCompleteness">{{currentFood.description}}<br>Calories:{{currentFood.calories}}
        <input *ngIf="currentFood.done === true" type="checkbox" checked (click)="toggleDone(currentFood, false)"/>
        <input *ngIf="currentFood.done === false" type="checkbox" (click)="toggleDone(currentFood, true)"/>
      <button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button></li>
    </ul>
    `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string ="incompleteFoods";

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  togggleDone(clickedFood: Food, setCompleteness: boolean) {
    clickedFood.done = setCompleteness;
  }


  isDone(clickedFood: Food) {
    if(clickedFood.done === true) {
      alert("This food is done!");
    } else {
      alert("This food isn't done being edited yet!");
    }
  }

  caloriesColor(currentFood){
    if(currentFood.calories >= 500){
      return "bg-danger";
    } else if (currentFood.calories < 500){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
