import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { MessagesComponent } from '../../components/messages/messages.component';

const ChatRoutes: Routes = [
  { path: 'conversations',  redirectTo: 'conversation/:id' },
  { path: 'conversation/:id', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ChatRoutes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
