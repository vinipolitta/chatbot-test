import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSugestionComponent } from '../../components/chat-sugestion/chat-sugestion.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/Message';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MuseumComponent, ArrowLeftComponent, ChatSugestionComponent, CommonModule, ChatDialogComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages: Message[] = [];

  sendSugestionQuestion(question: string) {
    this.messages.push({
      type:'request',
      message: question,
    });
  }
}
