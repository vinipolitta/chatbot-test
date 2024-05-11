import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-sugestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-sugestion.component.html',
  styleUrl: './chat-sugestion.component.scss',
})
export class ChatSugestionComponent {
  @Output() questionSelected = new EventEmitter<string>();

  sugestionTopics = [
    {
      title: 'Duvidas',
      icon: '/assets/question.svg',
      questions: [
        'Qual o valor para entrar no museu?',
        'Quando o museu está aberto?',
      ],
    },
    {
      title: 'Curiosidade',
      icon: '/assets/curiosity.svg',
      questions: [
        'Quem era o prefeito na época da criação?',
        'Quantos cômodos existem no museu?',
        'Quantas peças estão exibidas no museu?',
      ],
    },
    {
      title: 'Historia',
      icon: '/assets/history.svg',
      questions: [
        'Quando o museu foi criado?',
        'Qual o estilo arquitetônico do prédio?',
        'Quem foi o arquiteto do prédio?',
      ],
    },
  ];

  selectQuestion(question: string): void {
    this.questionSelected.emit(question);
  }
}
