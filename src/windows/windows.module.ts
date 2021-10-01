import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopComponent } from './desktop/desktop.component';
import { WindowComponent } from './window/window.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { StartBarComponent } from './start-bar/start-bar.component';
import { HeaderComponent } from './header/header.component';
import { WindowsModuleBaseComponent } from './windowsmodule-base/windows-module-base.component';
import { StartItemComponent } from './start-item/start-item.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ApplicationsModule } from './applications/applications.module';

@NgModule({
  declarations: [
    DesktopComponent,
    WindowComponent,
    ShortcutComponent,
    StartBarComponent,
    HeaderComponent,
    WindowsModuleBaseComponent,
    StartItemComponent,
    ActivitiesComponent
    
  ],
  imports: [
    CommonModule,
    ApplicationsModule
  ]
})
export class WindowsModule { }
