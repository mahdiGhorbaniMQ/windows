import { Component, OnInit } from '@angular/core';
import { DesktopInformationService } from '../dataAndModel/desktop/information/desktop-information.service';
import { ShortcutsInformationService } from '../dataAndModel/shortcut/information/shortcuts-information.service';
import { ShortcutModel } from '../dataAndModel/shortcut/model/shortcut-model';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  shortcuts:ShortcutModel[]=[];
  constructor(public windowsInformation:WindowsInformationService,
              private shortcutsInformation:ShortcutsInformationService,
              private windowsAPI:WindowsAPIService,
              public desktopInformation:DesktopInformationService,
              private startItemInformation:StartItemsInformationService) { }

  ngOnInit(): void {
    this.shortcuts=this.shortcutsInformation.shortcuts;
  }
  openWindow(appName:string){
    this.windowsAPI.openWindowByAppName(appName);    
  }
  unFocusFromEverything(){
    this.startItemInformation.showOpenWindows=false;
  }
}
