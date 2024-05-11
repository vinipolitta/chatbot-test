import { Component, OnInit } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSugestionComponent } from '../../components/chat-sugestion/chat-sugestion.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/Message';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { MessagesService } from '../../services/messages.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ChatInputComponent } from '../../components/chat-input/chat-input.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MuseumComponent,
    ArrowLeftComponent,
    ChatSugestionComponent,
    CommonModule,
    ChatDialogComponent,
    ReactiveFormsModule,
    ChatInputComponent
  ],
  providers: [MessagesService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages: Message[] = JSON.parse(localStorage.getItem('messages') ?? '[]');

  constructor(private service: MessagesService) {}


  updateLocalStorage() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }


  questionUser(questionUser: string) {
    this.sendSugestionQuestion(questionUser);
  }



  sendSugestionQuestion(question: string) {
    this.messages.push({
      type: 'request',
      message: question,
    });

    this.updateLocalStorage();
    this.sendMessage(question);
  }

  sendMessage(message: string) {
    this.service.send(message).subscribe({
      next: (body) => {
        this.messages.push({
          type: 'response',
          message: body.response,
        });
        this.updateLocalStorage();
      },
    });
  }
}
