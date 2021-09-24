import { Component, Input, OnInit } from '@angular/core';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

  constructor(private windowsInformation:WindowsInformationService) { }
  @Input("shortcutId") shortcutId!:number;
  ngOnInit(): void {
  }

}
