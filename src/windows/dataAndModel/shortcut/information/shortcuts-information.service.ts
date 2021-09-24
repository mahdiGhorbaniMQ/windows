import { Injectable } from '@angular/core';
import { ShortcutModel } from '../model/shortcut-model';

@Injectable({
  providedIn: 'root'
})
export class ShortcutsInformationService {
  shortcuts:ShortcutModel[]=[];
  constructor() {
    this.shortcuts=[
      {appName:"app-1",hasIcon:false,shortcutId:0},
      {appName:"app-2",hasIcon:false,shortcutId:1},
      {appName:"app-3",hasIcon:false,shortcutId:2},
      {appName:"app-4",hasIcon:false,shortcutId:3},
      {appName:"app-5",hasIcon:false,shortcutId:4},
      {appName:"app-6",hasIcon:false,shortcutId:5},
      {appName:"app-7",hasIcon:false,shortcutId:6},
      {appName:"app-8",hasIcon:false,shortcutId:7},
      {appName:"app-9",hasIcon:false,shortcutId:8},
      {appName:"app-10",hasIcon:false,shortcutId:9},
      {appName:"app-11",hasIcon:false,shortcutId:10},
      {appName:"app-12",hasIcon:false,shortcutId:11}
    ]
  }
}
