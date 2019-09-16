import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-creation-form',
  template: `
    <form [formGroup]="creationForm" (ngSubmit)="emitCreateTicket()">
      <div>
        <input
          type="text"
          formControlName="description"
          data-testid="ticket-description"
        />
        <small *ngIf="creationForm.get('description').hasError('required')"
          >Please add a description.</small
        >
        <small *ngIf="creationForm.get('description').hasError('minlength')"
          >The description needs to be at least 2 characters long.</small
        >
      </div>
      <button
        [disabled]="creationForm.invalid"
        type="submit"
        data-testid="ticket-create"
      >
        CREATE TICKET
      </button>
    </form>
  `,
  styles: []
})
export class TicketCreationForm {
  creationForm: FormGroup;

  @Output() create = new EventEmitter<Ticket>();

  constructor(private fb: FormBuilder) {
    this.creationForm = this.setUpCreationForm();
  }

  emitCreateTicket() {
    this.create.emit({ ...this.creationForm.value, completed: false });
    this.creationForm.reset();
  }

  private setUpCreationForm(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
