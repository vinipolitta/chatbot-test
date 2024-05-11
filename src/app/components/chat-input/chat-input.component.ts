import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent implements OnInit {

  form!: FormGroup;
  @Output() questionUser = new EventEmitter<string>();

  constructor(private service: MessagesService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.forms();
  }

  forms() {
    this.form = this.fb.group({
      insertQuestion: [''],
    });
  }


  onSubmit() {
    const question = this.form.get('insertQuestion')?.value;
    if (this.form.get('insertQuestion')?.value) {
      this.questionUser.emit(question);
      this.form.reset();
    }
  }
}
