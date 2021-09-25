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
    if(this.windowInformation.showHintWindow!=undefined){
      var windowData = this.windowInformation.windows.get(this.windowInformation.showHintWindow)!;
      windowData.showHintWindow=false;
      this.windowInformation.hintWindowStyle={};
      this.windowInformation.showHintWindow=undefined;
      if(windowData.hintWindowStatus=="right"){
        windowData.halfscreen="right";
        this.windowsAPI.moveWindowToHalfscreen(windowData)
      }
      else if(windowData.hintWindowStatus=="left"){
        windowData.halfscreen="left";
        this.windowsAPI.moveWindowToHalfscreen(windowData)
      }
      else if(windowData.hintWindowStatus=="full"){
        windowData.fullscreen=true;
        this.windowsAPI.moveWindowToFullscreen(windowData)
      }
      windowData.hintWindowStatus="";
    }
  }
}
