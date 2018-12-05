import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../types/message/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  spinner: boolean = false;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getMessages('123');
  }

  getMessages(messagesId: string) {
    this.spinner = true;
    this.chatService.getMessages(messagesId).subscribe(res => {
      if (res.ok) {
        this.messages = res.data;
        this.spinner = false;
      } else {
        this.spinner = false;
      }
    });
  }
}
