import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { GroupsRoutingModule } from './groups-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, MatGridListModule, SharedModule, GroupsRoutingModule ],
  declarations: [ GroupsRoutingModule.components ]
})
export class GroupsModule { }