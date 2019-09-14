import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list-item',
  template: `
    <p>
      <a [routerLink]="['..', 'details', ticket.id]"
        ><strong>{{ ticket.description }}</strong>
        <br />
        <small>#{{ ticket.id }}</small></a
      >
    </p>
  `,
  styles: []
})
export class TicketListItem {
  @Input() ticket: Ticket;
}
