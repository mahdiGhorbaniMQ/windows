import { Component, OnInit } from '@angular/core';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';


@Component({
  selector: 'app-windows-module-base',
  templateUrl: './windows-module-base.component.html',
  styleUrls: ['./windows-module-base.component.css']
})
export class WindowsModuleBaseComponent implements OnInit {

  constructor(private windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
  }

  onMouseMove($event:any){
    this.windowsAPI.moveWindowTakenCordinateToMouseCordinate($event);
    this.windowsAPI.moveWindowEdgeToMouseCordinate($event);
  }
  onMouseUp($event:any){
    this.windowsAPI.releaseSelectingWindowOptions();
    this.windowsAPI.handleHintWindow();
  }
}