import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Conversation } from '../../types/conversation/conversation.interface';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  conversations: Conversation[];
  @Output()
  getMessagesId = new EventEmitter();
  selsctedIndex: number = 0;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getConversations('conversations').subscribe(res => {
      if (res.ok) {
        this.conversations = res.data;
      } else {
      }
    });
  }

  setMessagesId(messagesId: string, index: number) {
    this.getMessagesId.emit(messagesId);
    this.selsctedIndex = index;
  }

}
