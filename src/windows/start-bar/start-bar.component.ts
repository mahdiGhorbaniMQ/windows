import { Component, OnInit } from '@angular/core';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';
import { StartItemModel } from '../dataAndModel/startItem/model/start-item-model';
import { WindowModel } from '../dataAndModel/window/model/window-model';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';

@Component({
  selector: 'app-start-bar',
  templateUrl: './start-bar.component.html',
  styleUrls: ['./start-bar.component.css']
})
export class StartBarComponent implements OnInit {
  // startItems:StartItemModel[]=[];

  constructor(public startItemInformation:StartItemsInformationService,
              private windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
    // this.startItems=this.startItemInformation.startItems;
  }
  openWindow(startItemData:StartItemModel){
    if(!this.startItemInformation.showOpenWindows &&
      this.startItemInformation.openWindows.get(startItemData.appName)!.length==0){ 
        this.windowsAPI.openWindowByAppName(startItemData.appName);    
    }
    else if(!this.startItemInformation.showOpenWindows &&
      this.startItemInformation.openWindows.get(startItemData.appName)!.length>1){ 
        this.startItemInformation.showOpenWindows=true;
        this.startItemInformation.selectedItem=startItemData.appName;
        this.startItemInformation.selectedItemIndex=Number(startItemData.startItemId);
   }
  }
  showOpenWindows(startItemData:StartItemModel){
    if(!this.startItemInformation.showOpenWindows &&
       (this.startItemInformation.openWindows.get(startItemData.appName)!.length>1 ||
       this.startItemInformation.openWindows.get(startItemData.appName)![0].hide)){ 
        this.startItemInformation.showOpenWindows=true;
        this.startItemInformation.selectedItem=startItemData.appName;
        this.startItemInformation.selectedItemIndex=Number(startItemData.startItemId);
    }
    else if(this.startItemInformation.showOpenWindows){
      this.startItemInformation.showOpenWindows=false;
      this.startItemInformation.selectedItem="";
      this.startItemInformation.selectedItemIndex=0;
    }
    else{
      this.windowsAPI.showWindow(this.startItemInformation.openWindows.get(startItemData.appName)![0])
    }
  }
  showAllApps(){
    
  }


  showWindow(window:WindowModel){
    this.windowsAPI.showWindow(window);
  }
  hideWindow(window:WindowModel){
    if(window.hide){
      this.windowsAPI.hideWindow(window);
    }
  }
  selectWindow(window:WindowModel){
    window.hide=false;
    this.windowsAPI.focusToWindow(window);
    this.startItemInformation.showOpenWindows=false;
  }
}
