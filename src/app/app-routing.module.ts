import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindowsModuleBaseComponent } from 'src/windows/windowsmodule-base/windows-module-base.component';

const routes: Routes = [
  {
    path:"",
    component:WindowsModuleBaseComponent,
    loadChildren: () => import('../windows/windows.module').then(m => m.WindowsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
