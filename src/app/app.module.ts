import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailItemComponent } from './email-list/email-item/email-item.component';
import { EmailDisplayComponent } from './email-display/email-display.component';
import { EmailService } from './email.service';

@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent,
    EmailItemComponent,
    EmailDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
