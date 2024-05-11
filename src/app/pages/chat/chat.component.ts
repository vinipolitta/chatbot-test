import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSugestionComponent } from '../../components/chat-sugestion/chat-sugestion.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MuseumComponent, ArrowLeftComponent, ChatSugestionComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
