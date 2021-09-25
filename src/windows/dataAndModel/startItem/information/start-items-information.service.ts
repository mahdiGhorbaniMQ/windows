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
    this.startItems.set("0",{appName:"app-1",hasIcon:false,startItemId:"0"});
    this.startItems.set("1",{appName:"app-2",hasIcon:false,startItemId:"1"});
    this.startItems.set("2",{appName:"app-3",hasIcon:false,startItemId:"2"});
    this.startItems.set("3",{appName:"app-4",hasIcon:false,startItemId:"3"});
    this.startItems.set("4",{appName:"app-5",hasIcon:false,startItemId:"4"});

    this.openWindows.set("app-1",[]);
    this.openWindows.set("app-2",[]);
    this.openWindows.set("app-3",[]);
    this.openWindows.set("app-4",[]);
    this.openWindows.set("app-5",[]);
    this.openWindows.set("app-6",[]);
    this.openWindows.set("app-7",[]);
    this.openWindows.set("app-8",[]);
    this.openWindows.set("app-9",[]);
    this.openWindows.set("app-10",[]);
    this.openWindows.set("app-11",[]);
    this.openWindows.set("app-12",[]);
    this.openWindows.set("app-13",[]);
    this.openWindows.set("app-14",[]);
  }
}
