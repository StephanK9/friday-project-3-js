import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
    </div>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
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
    new Food('Pasta with butter and cheese', 600, 'so good!'),
    new Food('Chicken with rice', 430, 'yum yum'),
    new Food('Soup for da soul', 200, 'healthy')
  ];


  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newFood: Food){
    this.masterFoodList.push(newFood);
  }
}
