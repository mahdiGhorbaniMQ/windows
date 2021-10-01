import { Injectable } from '@angular/core';
import { ShortcutModel } from '../model/shortcut-model';

@Injectable({
  providedIn: 'root'
})
export class ShortcutsInformationService {
  shortcuts:ShortcutModel[]=[];
  constructor() {
    this.shortcuts=[
      {appName:"calculator",hasIcon:false,shortcutId:0},
      {appName:"callender",hasIcon:false,shortcutId:1},
      {appName:"convertor",hasIcon:false,shortcutId:2},
      {appName:"gallery",hasIcon:false,shortcutId:3},
      {appName:"todoList",hasIcon:false,shortcutId:4}
    ]
  }
}
