import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GpaystatusComponent } from './gpaystatus.component';

const routes: Routes = [
  { path: 'gpaystatus', component: GpaystatusComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GpayStatusRoutingModule {
  static components = [ GpaystatusComponent ];
}
