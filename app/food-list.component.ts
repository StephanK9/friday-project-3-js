import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
    <li (click)="isDone(currentFood)" *ngFor="let currentFood of childFoodList">{{currentFood.description}}<br>Calories:{{currentFood.calories}} <button (click)="editButtonHasBeenClicked(currentFood)">Edit!</button></li>
  </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
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
