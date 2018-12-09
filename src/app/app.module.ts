import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './services/api/api.service';
import { ChatService } from './services/chat/chat.service';
import { ChatModule } from './_pages_/chat/chat.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './_pages_/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule,
    AppRoutingModule
  ],
  providers: [ApiService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
