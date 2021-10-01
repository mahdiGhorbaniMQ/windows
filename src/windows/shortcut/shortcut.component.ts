import { Component, Input, OnInit } from '@angular/core';
import { ShortcutsInformationService } from '../dataAndModel/shortcut/information/shortcuts-information.service';
import { ShortcutModel } from '../dataAndModel/shortcut/model/shortcut-model';
import { WindowsInformationService } from '../dataAndModel/window/information/windows-information.service';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

  @Input("shortcutId") shortcutId!:number;
  shortcutData!:ShortcutModel;

  constructor(private shortcutInformation:ShortcutsInformationService) { }
  ngOnInit(): void {
    this.shortcutInformation.shortcuts.forEach(element => {
      if(element.shortcutId==this.shortcutId){
        this.shortcutData=element;
        return;
      }
    });
  }

}
