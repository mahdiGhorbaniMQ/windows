import { Injectable } from '@angular/core';
import { WindowModel } from '../model/window-model';

@Injectable({
  providedIn: 'root'
})
export class WindowsInformationService {

  windows=new Map<string,WindowModel>();

  idCounter:number=-1;
  
  focusedWindow?:WindowModel=undefined;

  windowEdgeTaken?:WindowModel=undefined;

  hintWindowStyle={};
  showHintWindow?:string=undefined;

  dragingWindow?:WindowModel=undefined;
  isTakenEdgeLeft:boolean=false;
  isTakenEdgeRight:boolean=false;
  isTakenEdgeTop:boolean=false;
  isTakenEdgeBottom:boolean=false;
  
  notFoundWindow:WindowModel={
    appName:"not found",
    appPath:"",
    windowId:"",
    width:320,
    height:400,
    relationalWidth:320/(window.innerWidth-105),
    relationalHeight:400/(window.innerHeight-115),
    x:0,
    y:0,
    relationalX:0,
    relationalY:0,
    focus:false,
    isMouseDown:false,
    zIndex:0,
    fullscreen:false,
    halfscreen:"none",
    hide:false,
    display:true,
    theme:"",
    showHintWindow:false,
    hintWindowStatus:"",
    style:{
      width:"320px",
      height:"400px",
      top:"0px",
      left:"0px"
    }
  };
  
  constructor() {}
}
