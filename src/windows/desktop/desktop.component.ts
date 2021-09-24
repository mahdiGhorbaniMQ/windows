import { Component, OnInit } from '@angular/core';
import { ShortcutsInformationService } from '../dataAndModel/shortcut/information/shortcuts-information.service';
import { ShortcutModel } from '../dataAndModel/shortcut/model/shortcut-model';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  shortcuts:ShortcutModel[]=[]
  constructor(public windowsInformation:WindowsInformationService,
              private shortcutsInformation:ShortcutsInformationService,
              private windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
    this.shortcuts=this.shortcutsInformation.shortcuts;
  }
  openWindow(appName:string){
    this.windowsAPI.openWindowByAppName(appName);    
  }
}
