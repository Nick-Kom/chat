import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ChatService } from '../../services/chat/chat.service';
import { Message } from '../../types/message/message.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  @Input('messages')
  messages: Message[];
  spinner = false;
  private routerSubscriber: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatService: ChatService
  ) {
    this.routerSubscriber = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const messagesId = this.route.snapshot.params['id'];
        this.getMessages(messagesId);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (!!this.routerSubscriber) {
      this.routerSubscriber.unsubscribe();
    }
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
