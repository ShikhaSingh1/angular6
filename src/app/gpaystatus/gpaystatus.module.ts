import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { GpayStatusRoutingModule } from './gpaystatus-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, GpayStatusRoutingModule ],
  declarations: [ GpayStatusRoutingModule.components ]
})
export class GpayStatusModule { 
    constructor(){
    }
}