import { WindowStyleModel } from "./window-style-model";

export interface WindowModel {
    appName:string;
    appPath:string;
    windowId:string;
    width:number;
    height:number;
    relationalWidth:number;
    relationalHeight:number;
    x:number;
    y:number;
    relationalX:number;//for responsive
    relationalY:number;//for responsive
    xTaken?:number;//for moving
    yTaken?:number;//for moving
    focus:boolean;
    zIndex:number;
    fullscreen:boolean;
    isMouseDown:boolean;
    hide:boolean;
    theme:string;
    style:WindowStyleModel
}
