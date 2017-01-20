import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker App for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="caloriesColor(currentFood)" (click)="isDone(currentFood)" *ngFor="let currentFood of foods">{{currentFood.description}}<br>Calories:{{currentFood.calories}} <button (click)="editFood(currentFood)">Edit!</button></li>
    </ul>
    <hr>
    <div>
      <div *ngIf="selectedFood">
        <h3>{{selectedFood.description}}</h3>
        <p>Food eaten? {{selectedFood.done}}</p>
      <h3>Edit Food Entry</h3>
      <label>Enter Food Description:</label>
      <input [(ngModel)]="selectedFood.description">
        <label>Enter your food's calorie count:</label>
        <br>
        <input type="radio" [(ngModel)]="selectedFood.calories" [value]="500">Over 500 (High Calories)<br>
        <input type="radio" [(ngModel)]="selectedFood.calories" [value]="400">Under 500 (Low Calories)
        <button (click)= "finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Food Logged';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  foods: Food[] = [
    new Food('Pasta with butter and cheese', 600),
    new Food('Chicken with rice', 430),
    new Food('Soup for da soul', 200)
  ];

  selectedFood = null;

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
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

export class Food {
  public done: boolean = false;
  constructor(public description: string, public calories: number) { }
}
