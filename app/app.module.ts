import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { FoodListComponent }  from './food-list.component';
import { EditFoodComponent }  from './edit-food.component';
import { NewFoodComponent }  from './new-food.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  FoodListComponent,
                  EditFoodComponent,
                  NewFoodComponent,
                  CompletenessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
