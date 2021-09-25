import { Injectable } from '@angular/core';
import { StartItemsInformationService } from '../../startItem/information/start-items-information.service';
import { WindowsInformationService } from '../information/windows-information.service';
import { WindowModel } from '../model/window-model';

@Injectable({
  providedIn: 'root'
})
export class WindowsAPIService {

  constructor(private information:WindowsInformationService,
              private startItemInformation:StartItemsInformationService){}

  getWindowById(id:string):any{
    if(this.information.windows.get(id)){
      return this.information.windows.get(id);
    }
    else 
      return this.information.notFoundWindow;
  }
  openWindowByAppName(appName:string){
    var window:WindowModel={
      appName:appName,
      appPath:"",
      windowId:this.generateWindowId(),
      width:320,
      height:400,
      relationalWidth:320/this.getScreenWidth(),
      relationalHeight:400/this.getScreenHeight(),
      x:0,
      y:0,
      relationalX:0,
      relationalY:0,
      focus:false,
      isMouseDown:false,
      zIndex:this.information.windows.size+1,
      fullscreen:false,
      halfscreen:"none",
      hide:false,
      display:true,
      theme:"dark",
      showHintWindow:false,
      hintWindowStatus:"",
      style:{
        width:"320px",
        height:"400px",
        top:"0px",
        left:"0px",
      }
    };
    this.startItemInformation.openWindows.get(appName)?.push(window)  
    this.information.windows.set(window.windowId,window);
  }
  closeWindowById(id:string){
    this.removeFromOpenWindows(this.information.windows.get(id)!);
    this.information.windows.delete(id);
  }
  removeFromOpenWindows(windowData:WindowModel){
    var openWindows=this.startItemInformation.openWindows.get(windowData.appName)!;
    openWindows.forEach((element,index) => {
      if(element==windowData){
        openWindows.splice(index,1);
        return;
      }      
    });
  }
  focusToWindow(windowData:WindowModel){
    var zIndex=windowData.zIndex;
    this.information.windows.forEach(value => {
      if(value.zIndex>zIndex){
        value.zIndex--;
      }
    });
    windowData.zIndex=this.information.windows.size;
  }
  unFocusFromWindow(){

  }
  moveWindowToFullscreen(windowData:WindowModel){
    windowData.style["top"]="0";
    windowData.style["left"]="0";
    windowData.style["width"]=window.innerWidth-105+"px";
    windowData.style["height"]=window.innerHeight-40+"px";
    windowData.fullscreen=true;
  }
  moveWindowToHalfscreen(windowData:WindowModel){
    if(windowData.halfscreen=="right"){
      windowData.style.top="0px";
      windowData.style.height=window.innerHeight+"px";
      windowData.style.left=this.getScreenWidth()/2+"px";
      windowData.style.width=this.getScreenWidth()/2+"px";
    }
    else if(windowData.halfscreen=="left"){
      windowData.style.top="0px";
      windowData.style.height=this.getScreenHeight()+"px";
      windowData.style.left="0px";
      windowData.style.width=this.getScreenWidth()/2+"px";
    }

  }
  moveWindowToDefultSize(windowData:WindowModel){
    windowData.style["top"]=windowData.y+"px";
    windowData.style["left"]=windowData.x+"px";
    windowData.style["width"]=windowData.width+"px";
    windowData.style["height"]=windowData.height+"px";
    windowData.fullscreen=false;
  }
  hideWindow(windowData:WindowModel){
    windowData.display=false;
  }
  showWindow(windowData:WindowModel){
    windowData.display=true;
    this.focusToWindow(windowData)
  }
  moveWindowEdgeToMouseCordinate($event:any){
    var window=this.information.windowEdgeTaken;
    var mouseX=$event.pageX-105;
    var mouseY=$event.pageY-40;

    if(this.information.isTakenEdgeLeft && window!.width+window!.x-mouseX>320){
      if(mouseX<0){
        window!.width=window!.width+window!.x;
        window!.x=0;
      }
      else{
        window!.width=window!.width+window!.x-mouseX;
        window!.x=mouseX;
      }
      window!.relationalX=window!.x/this.getScreenWidth();
      window!.relationalWidth=window!.width/this.getScreenWidth();
      window!.style.left=window!.x+"px";
      window!.style.width=window!.width+"px";
    }
    if(this.information.isTakenEdgeRight && mouseX-window!.x>320){
      if(mouseX>this.getScreenWidth()){
        window!.width=this.getScreenWidth()-window!.x;
      }
      else{
        window!.width=mouseX-window!.x;
      }
      window!.relationalX=window!.x/this.getScreenWidth();
      window!.relationalWidth=window!.width/this.getScreenWidth();
      window!.style.width=window!.width+"px";
    }
    if(this.information.isTakenEdgeTop && window!.height+window!.y-mouseY>400){
      if(mouseY<0){
        window!.height=window!.height+window!.y;
        window!.y=0;
      }
      else{
        window!.height=window!.height+window!.y-mouseY;
        window!.y=mouseY;
      }
      window!.relationalY=window!.y/this.getScreenHeight();
      window!.relationalHeight=window!.height/this.getScreenHeight();
      window!.style.top=window!.y+"px";
      window!.style.height=window!.height+"px";
    }
    if(this.information.isTakenEdgeBottom && mouseY-window!.y>400){
      if(mouseY>this.getScreenHeight()){
        window!.height=this.getScreenHeight()-window!.y;
      }
      else{
        window!.height=mouseY-window!.y;
      }
      window!.relationalY=window!.y/this.getScreenHeight();
      window!.relationalHeight=window!.height/this.getScreenHeight();
      window!.style.height=window!.height+"px";
    }
  }
  moveWindowTakenCordinateToMouseCordinate(windowData:WindowModel,$event:any){
    var xTaken=windowData.xTaken;
    var yTaken=windowData.yTaken;
    var xMouse=$event.x-105;
    var yMouse=$event.y-40;
    
    this.moveWindowToDefultSize(windowData);
    windowData.x=xMouse-xTaken!;
    windowData.y=yMouse-yTaken!;
    if(windowData.x>this.getScreenWidth()-windowData.width){
      windowData.x=this.getScreenWidth()-windowData.width
      windowData.showHintWindow=true;
      windowData.hintWindowStatus="right";
      this.information.showHintWindow=windowData.windowId;
      this.information.hintWindowStyle={"height":this.getScreenHeight()+"px","left":this.getScreenWidth()/2+"px","width":this.getScreenWidth()/2+"px"};
    }
    else if(windowData.x<0){
      windowData.x=0;
      windowData.showHintWindow=true;
      windowData.hintWindowStatus="left"
      this.information.showHintWindow=windowData.windowId;
      this.information.hintWindowStyle={"height":this.getScreenHeight()+"px","left":0,"width":this.getScreenWidth()/2+"px"};
    }
    else if(windowData.y<0){
      windowData.y=0;
      windowData.showHintWindow=true;
      windowData.hintWindowStatus="full"
      this.information.showHintWindow=windowData.windowId;
      this.information.hintWindowStyle={"height":this.getScreenHeight()+"px","left":0,"width":this.getScreenWidth()+"px"};
    }
    else{
      windowData.showHintWindow=false;
      windowData.hintWindowStatus=""
      this.information.showHintWindow=undefined;
      this.information.hintWindowStyle={};
    }
    if(windowData.y>this.getScreenHeight()-windowData.height){
      windowData.y=this.getScreenHeight()-windowData.height
    }
    windowData.relationalX=windowData.x/this.getScreenWidth();
    windowData.relationalY=windowData.y/this.getScreenHeight();
    windowData.style.left=windowData.x+"px"
    windowData.style.top=windowData.y+"px"
  }
  generateWindowId():string{
    this.information.idCounter++;
    return this.information.idCounter+"";
  }
  getScreenWidth():number{
    return (window.innerWidth-105);
  }
  getScreenHeight():number{
    return (window.innerHeight-40);
  }
}
