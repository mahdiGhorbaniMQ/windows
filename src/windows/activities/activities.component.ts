import { Component, OnInit } from '@angular/core';
import { AppsInformationService } from '../dataAndModel/applications/information/apps-information.service';
import { DesktopInformationService } from '../dataAndModel/desktop/information/desktop-information.service';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  constructor(public windowsInformation:WindowsInformationService,
              public applicationsInformation:AppsInformationService,
              public desktopInformation:DesktopInformationService) { }

  ngOnInit(): void {
  }

}
