import { Component, Input, OnInit } from '@angular/core';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';
@Component({
  selector: 'app-start-item',
  templateUrl: './start-item.component.html',
  styleUrls: ['./start-item.component.css']
})
export class StartItemComponent implements OnInit {

  constructor(private windowsInformation:WindowsInformationService) { }
  @Input("startItemId") startItemId!:number;

  ngOnInit(): void {
  }
}
