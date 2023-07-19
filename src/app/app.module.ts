import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSharingService } from './services/data-sharing.service';
import { LocalStorageService } from './services/local-storage.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [DataSharingService, LocalStorageService, SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
