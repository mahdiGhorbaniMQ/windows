import { Component, Input, OnInit } from '@angular/core';
import { ShortcutsInformationService } from '../dataAndModel/shortcut/information/shortcuts-information.service';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';
import { StartItemModel } from '../dataAndModel/startItem/model/start-item-model';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowModel } from '../dataAndModel/window/model/window-model';
@Component({
  selector: 'app-start-item',
  templateUrl: './start-item.component.html',
  styleUrls: ['./start-item.component.css']
})
export class StartItemComponent implements OnInit {

  openWindows:WindowModel[]=[];
  startItemData!:StartItemModel;
  constructor(private windowsInformation:WindowsInformationService,
              public startItemsInformation:StartItemsInformationService,) { }

  @Input("startItemId") startItemId!:string;

  ngOnInit(): void {
    this.startItemData = this.getStartItem();
    this.openWindows= this.getOpenWindows();
  }



  getStartItem():any{
    var result;
    if(this.startItemsInformation.startItems.has(this.startItemId)){
      result=this.startItemsInformation.startItems.get(this.startItemId)
    }
    else{
      result = {appName:"app-5",hasIcon:false,startItemId:"4",showOpenWindows:false}
    }
    return result;
  }
  getOpenWindows():any{
    var result;
    if(this.startItemsInformation.openWindows.has(this.startItemData.appName)){
      result=this.startItemsInformation.openWindows.get(
        this.startItemData.appName
      );
    }
    else{
      result = []
    }
    return result;
  }
}
