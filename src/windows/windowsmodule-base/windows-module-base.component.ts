import { Component, OnInit } from '@angular/core';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';


@Component({
  selector: 'app-windows-module-base',
  templateUrl: './windows-module-base.component.html',
  styleUrls: ['./windows-module-base.component.css']
})
export class WindowsModuleBaseComponent implements OnInit {

  constructor(private windowInformation:WindowsInformationService,
              private windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
  }

  onMouseMove($event:any){
    if(this.windowInformation.dragingWindow!=undefined){
      this.windowsAPI.moveWindowTakenCordinateToMouseCordinate(this.windowInformation.dragingWindow,$event);
    }
    if(this.windowInformation.windowEdgeTaken!=undefined){
      this.windowsAPI.moveWindowEdgeToMouseCordinate($event);
    }
  }
  onMouseUp($event:any){
    this.windowInformation.dragingWindow=undefined;
    this.windowInformation.windowEdgeTaken=undefined;
    this.windowInformation.isTakenEdgeLeft=false;
    this.windowInformation.isTakenEdgeRight=false;
    this.windowInformation.isTakenEdgeTop=false;
    this.windowInformation.isTakenEdgeBottom=false;
  }
}
