import { Component, OnInit } from '@angular/core';
import { HeaderInformationService } from '../dataAndModel/header/information/header-information.service';
import { StartItemsInformationService } from '../dataAndModel/startItem/information/start-items-information.service';
import { WindowModel } from '../dataAndModel/window/model/window-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hours:number=0;
  minutes:number=0;
  seconds:number=0
  constructor(private startItemInformation:StartItemsInformationService,
              public headerInformation:HeaderInformationService) { }

  ngOnInit(): void {
    this.setTime();
    setInterval(this.setTime,1000);
  }
  unFocusFromEverything(){
    this.startItemInformation.showOpenWindows=false;
  }
  setTime(){
    let time= new Date()
    this.hours=time.getHours();
    this.minutes=time.getMinutes();
    this.seconds=time.getSeconds();
  }
}
