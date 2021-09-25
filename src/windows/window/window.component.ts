import { Component, Input, OnInit } from '@angular/core';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowModel } from '../dataAndModel/window/model/window-model';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  @Input("windowId") windowId!:string;
  windowData!:WindowModel;

  constructor(public information:WindowsInformationService,
              public windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
    this.windowData=this.windowsAPI.getWindowById(this.windowId);
  }

  onResize(){
    if(this.windowData.relationalWidth*this.windowsAPI.getScreenWidth()>320){
      this.windowData.width=this.windowData.relationalWidth*this.windowsAPI.getScreenWidth();
    }
    if(this.windowData.relationalHeight*this.windowsAPI.getScreenHeight()>400){
      this.windowData.height=this.windowData.relationalHeight*this.windowsAPI.getScreenHeight();
    }
    this.windowData.x=this.windowData.relationalX*this.windowsAPI.getScreenWidth();
    this.windowData.y=this.windowData.relationalY*this.windowsAPI.getScreenHeight();
    this.windowData.style.left=this.windowData.x+"px";
    this.windowData.style.top=this.windowData.y+"px";
    this.windowData.style.width=this.windowData.width+"px";
    this.windowData.style.height=this.windowData.height+"px";
    if(this.windowData.fullscreen){
      this.windowsAPI.moveWindowToFullscreen(this.windowData)
    }
    this.windowsAPI.moveWindowToHalfscreen(this.windowData)
  }

  fullscreen(){
    // this.windowData.halfscreen="right";
    // this.windowsAPI.moveWindowToHalfscreen(this.windowData)
    if(this.windowData.fullscreen){
      this.windowsAPI.moveWindowToDefultSize(this.windowData);
    }
    else{
      this.windowsAPI.moveWindowToFullscreen(this.windowData)
    }
  }

  close(){
    this.windowsAPI.closeWindowById(this.windowId);
  }

  hideWindow(){
    this.windowsAPI.hideWindow(this.windowData);
    this.windowData.hide=true;
  }

  dragWindow($event:any):void{
    if(this.information.windowEdgeTaken==undefined){
      this.information.dragingWindow=this.windowData;
      this.windowData.xTaken=$event.offsetX;
      this.windowData.yTaken=$event.offsetY;
    }
  }

  unDragWindow($event:any):void{
    this.information.dragingWindow=undefined;
  }
  checkEdges($event:any){
    if(!this.windowData.fullscreen && this.information.dragingWindow==undefined){
      if($event.offsetX>this.windowData.width-10){
        this.information.isTakenEdgeRight=true;
        this.information.windowEdgeTaken=this.windowData;
      }
      if($event.offsetX<10){
        this.information.isTakenEdgeLeft=true;
        this.information.windowEdgeTaken=this.windowData;
      }
      if($event.offsetY>this.windowData.height-10){
        this.information.isTakenEdgeBottom=true;
        this.information.windowEdgeTaken=this.windowData;
      }
      if($event.offsetY<10){
        this.information.isTakenEdgeTop=true;
        this.information.windowEdgeTaken=this.windowData;
      }
    }
  }
  releaseEdges($event:any){
    this.information.windowEdgeTaken=undefined;
    this.information.isTakenEdgeLeft=false;
    this.information.isTakenEdgeRight=false;
    this.information.isTakenEdgeTop=false;
    this.information.isTakenEdgeBottom=false;
  }
  focus(){
    this.windowsAPI.focusToWindow(this.windowData);
  }
}
