import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestpayComponent } from './requestpay.component';

const routes: Routes = [
  { path: 'requestpay', component: RequestpayComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RequestpayRoutingModule {
  static components = [ RequestpayComponent ];
}
