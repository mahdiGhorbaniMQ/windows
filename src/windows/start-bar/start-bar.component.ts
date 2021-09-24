import { Component, OnInit } from '@angular/core';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';
import { StartItemModel } from '../dataAndModel/startItem/model/start-item-model';
import { WindowsAPIService } from '../dataAndModel/window/windowsAPI/windows-api.service';

@Component({
  selector: 'app-start-bar',
  templateUrl: './start-bar.component.html',
  styleUrls: ['./start-bar.component.css']
})
export class StartBarComponent implements OnInit {
  startItems:StartItemModel[]=[];

  constructor(private startItemInformation:StartItemsInformationService,
              private windowsAPI:WindowsAPIService) { }

  ngOnInit(): void {
    this.startItems=this.startItemInformation.startItems;
  }
  openWindow(appName:string){
    this.windowsAPI.openWindowByAppName(appName);    
  }
}
