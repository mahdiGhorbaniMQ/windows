import { Injectable } from '@angular/core';
import { WindowModel } from '../../window/model/window-model';
import { StartItemModel } from '../model/start-item-model';

@Injectable({
  providedIn: 'root'
})
export class StartItemsInformationService {
  startItems = new Map<string,StartItemModel>();
  openWindows = new Map<string,WindowModel[]>();
  selectedItem:string="";
  selectedItemIndex:number=0;
  showOpenWindows:boolean = false;
  constructor() {
    this.startItems.set("0",{appName:"calculator",hasIcon:false,startItemId:"0"});
    this.startItems.set("1",{appName:"callender",hasIcon:false,startItemId:"1"});
    this.startItems.set("2",{appName:"convertor",hasIcon:false,startItemId:"2"});
    this.startItems.set("3",{appName:"gallery",hasIcon:false,startItemId:"3"});
    this.startItems.set("4",{appName:"todoList",hasIcon:false,startItemId:"4"});

    this.openWindows.set("calculator",[]);
    this.openWindows.set("callender",[]);
    this.openWindows.set("convertor",[]);
    this.openWindows.set("gallery",[]);
    this.openWindows.set("todoList",[]);
  }
}
