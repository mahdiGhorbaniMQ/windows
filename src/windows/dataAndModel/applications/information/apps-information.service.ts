import { Injectable } from '@angular/core';
import { AppModel } from '../model/app-model';

@Injectable({
  providedIn: 'root'
})
export class AppsInformationService {
  apps:AppModel[]=[];
  constructor() { 
    this.apps=[
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
      {name:""},
    ]
  }
}
