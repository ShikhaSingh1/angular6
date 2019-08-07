import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared/shared.module';
import { RequestpayRoutingModule } from './requestpay-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, MatGridListModule,SharedModule, RequestpayRoutingModule ],
  declarations: [ RequestpayRoutingModule.components ]
})
export class RequestpayModule { }
