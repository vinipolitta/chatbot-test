import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSugestionComponent } from './chat-sugestion.component';

describe('ChatSugestionComponent', () => {
  let component: ChatSugestionComponent;
  let fixture: ComponentFixture<ChatSugestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSugestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSugestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
