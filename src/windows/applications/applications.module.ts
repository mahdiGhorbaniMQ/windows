import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { CallenderComponent } from './callender/callender.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ConvertorComponent } from './convertor/convertor.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    CallenderComponent,
    TodoListComponent,
    ConvertorComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CalculatorComponent,
    CallenderComponent,
    TodoListComponent,
    ConvertorComponent,
    GalleryComponent
  ]
})
export class ApplicationsModule { }
