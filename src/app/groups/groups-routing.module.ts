import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent } from './groups.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GroupsRoutingModule {
  static components = [ GroupsComponent ];
}
