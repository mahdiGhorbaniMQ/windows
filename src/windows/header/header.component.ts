import { Component, OnInit } from '@angular/core';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private startItemInformation:StartItemsInformationService) { }

  ngOnInit(): void {
  }
  unFocusFromEverything(){
    this.startItemInformation.showOpenWindows=false;
  }
}
