import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AsideComponent } from './aside/aside.component';
import { ListComponent } from './list/list.component';
import {Service} from "./service";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AsideComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,

      HttpClientModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
