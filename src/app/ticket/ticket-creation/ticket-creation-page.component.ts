import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketFeature } from '../ticket-feature-setup';
import { Store } from '@ngrx/store';
import { ticketSave } from './ticket-creation.actions';

@Component({
  selector: 'app-ticket-creation',
  template: `
    <app-ticket-creation-form
      (create)="saveTicket($event)"
    ></app-ticket-creation-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCreationPage {
  constructor(private store: Store<TicketFeature>) {}

  saveTicket(newTicket: Ticket) {
    this.store.dispatch(ticketSave({ payload: newTicket }));
  }
}
