import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './services/api/api.service';
import { ChatService } from './services/chat/chat.service';
import { ChatModule } from './page/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule
  ],
  providers: [ApiService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
