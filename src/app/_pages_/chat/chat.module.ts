import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ConversationsComponent } from '../../components/conversations/conversations.component';
import { ConversationItemComponent } from '../../components/conversations/conversation-item/conversation-item.component';
import { MessageItemComponent } from '../../components/messages/message-item/message-item.component';
import { MessagesComponent } from '../../components/messages/messages.component';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
    ConversationsComponent,
    ConversationItemComponent,
    MessagesComponent,
    MessageItemComponent
  ],
  exports: [
    ChatComponent
  ],
})
export class ChatModule { }
