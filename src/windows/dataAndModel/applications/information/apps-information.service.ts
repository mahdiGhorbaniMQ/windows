import { Injectable } from '@angular/core';
import { AppModel } from '../model/app-model';

@Injectable({
  providedIn: 'root'
})
export class AppsInformationService {
  apps:AppModel[]=[];
  constructor() { 
    this.apps=[
      {name:"calculator"},
      {name:"callender"},
      {name:"convertor"},
      {name:"gallery"},
      {name:"todoList"}
    ]
  }
}
