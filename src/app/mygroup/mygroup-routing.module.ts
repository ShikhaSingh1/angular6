import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MygroupComponent } from './mygroup.component';

const routes: Routes = [
  { path: 'mygroup', component: MygroupComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MyGroupRoutingModule {
  static components = [ MygroupComponent ];
}
