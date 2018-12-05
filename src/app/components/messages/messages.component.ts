import {Component, Input, OnInit} from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../types/message/message.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input('messages')
  messages: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

}
