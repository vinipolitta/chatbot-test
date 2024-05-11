import { Component, Input } from '@angular/core';
import { Message } from '../../types/Message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-response.component.html',
  styleUrl: './chat-response.component.scss'
})
export class ChatResponseComponent {
  @Input() message!: Message;

}
