import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Conversation } from '../../types/conversation/conversation.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
  conversations: Conversation[];
  @Output()
  getMessagesId = new EventEmitter();
  selsctedIndex = 0;

  constructor(private router: Router, private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getConversations('conversations').subscribe(res => {
      if (res.ok) {
        this.conversations = res.data;
      } else {
        this.conversations = [];
      }
    });
  }

  setMessagesId(messagesId: string, index: number) {
    this.selsctedIndex = index;
    this.router.navigate([`conversation/${messagesId}`]);
  }

}
