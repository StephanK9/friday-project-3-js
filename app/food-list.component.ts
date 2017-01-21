import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
      <select (change)="onChange($event.target.value)">
        <option value="allFoods" selected="selected">All Meals</option>
        <option value="highCalorie">High Calorie Meals</option>
        <option value="lowCalorie">Low Calorie Meals</option>
      </select>

      <h3>All of your Meals:</h3>
      <div *ngFor="let currentFood of childFoodList | calories:filterByCalories" class="food-list">
        <div *ngIf="currentFood.calories > 500" class="panel panel-warning">
        <div class="panel-heading"><p class="panel-head-text">{{currentFood.name}}</p> Calories: {{currentFood.calories}}</div>
        <div class="panel-body">
          <p>{{currentFood.description}}</p>
          <button class="edit-button"(click)="editButtonHasBeenClicked(currentFood)">Edit!</button>
        </div>
        </div>

        <div *ngIf="currentFood.calories > 300 && currentFood.calories <= 500" class="panel panel-primary">
        <div class="panel-heading"><p class="panel-head-text">{{currentFood.name}}</p> Calories: {{currentFood.calories}}</div>
          <div class="panel-body">
            <p>{{currentFood.description}}</p>
            <button class="edit-button"(click)="editButtonHasBeenClicked(currentFood)">Edit!</button>
          </div>
        </div>

        <div *ngIf="currentFood.calories <= 250" class="panel panel-success">
        <div class="panel-heading"><p class="panel-head-text">{{currentFood.name}}</p> Calories: {{currentFood.calories}}</div>
          <div class="panel-body">
            <p>{{currentFood.description}}</p>
            <button class="edit-button"(click)="editButtonHasBeenClicked(currentFood)">Edit!</button>
          </div>
        </div>
      </div>
      `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();


  filterByCalories: string ="allFoods";

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }


}
