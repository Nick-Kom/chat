import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from '../../../types/conversation/conversation.interface';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.scss'],
})
export class ConversationItemComponent implements OnInit {
  @Input('conversation')
  conversation: Conversation;
  @Input('selected')
  selected: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
