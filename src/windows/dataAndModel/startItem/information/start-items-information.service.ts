import { Injectable } from '@angular/core';
import { StartItemModel } from '../model/start-item-model';

@Injectable({
  providedIn: 'root'
})
export class StartItemsInformationService {
  startItems:StartItemModel[]=[];
  constructor() {
    this.startItems=[
      {appName:"app-1",hasIcon:false,startItemId:0},
      {appName:"app-2",hasIcon:false,startItemId:1},
      {appName:"app-3",hasIcon:false,startItemId:2},
      {appName:"app-4",hasIcon:false,startItemId:3},
      {appName:"app-5",hasIcon:false,startItemId:4},
      {appName:"app-6",hasIcon:false,startItemId:5},
      {appName:"app-7",hasIcon:false,startItemId:6},
      {appName:"app-8",hasIcon:false,startItemId:7},
      {appName:"app-9",hasIcon:false,startItemId:8},
      {appName:"app-10",hasIcon:false,startItemId:9}
    ]
  }
}
