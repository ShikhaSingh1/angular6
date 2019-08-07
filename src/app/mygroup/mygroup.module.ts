import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { MyGroupRoutingModule } from './mygroup-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, MatGridListModule,SharedModule, MyGroupRoutingModule ],
  declarations: [ MyGroupRoutingModule.components ]
})
export class MyGroupModule { }
