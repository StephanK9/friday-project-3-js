import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker App for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Food Logged';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedFood = null;

  masterFoodList: Food[] = [
    new Food('Pasta with butter and cheese', 600),
    new Food('Chicken with rice', 430),
    new Food('Soup for da soul', 200)
  ];


  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
