import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GroupsModule } from './groups/groups.module';
import { MyGroupModule } from './mygroup/mygroup.module';
import { RequestpayModule } from './requestpay/requestpay.module';
import { GpayStatusModule } from './gpaystatus/gpaystatus.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule, 
    GroupsModule,  
    MyGroupModule, 
    RequestpayModule,  
    GpayStatusModule,    // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,     // Main routes for application
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule          // Shared (multi-instance) objects
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
