import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesktopInformationService {
  showActivities?:boolean=false;
  showWindows?:boolean=false;
  showApplications?:boolean=false;
  constructor() { }
}
