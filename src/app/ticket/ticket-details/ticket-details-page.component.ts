import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignee } from '../assignee';
import { TicketFeature } from '../ticket-feature-setup';
import { select, Store } from '@ngrx/store';
import { selectAll } from './ticket-assignee.selectors';
import {
  ticketAssigneesLoadAll,
  ticketSetAssignee
} from './ticket-assignee.actions';
import { Ticket } from '../ticket';
import { activeTicket } from './ticket-details.selectors';

@Component({
  selector: 'app-ticket-details-page',
  template: `
    <app-ticket-information [ticket]="ticket$ | async"></app-ticket-information>
    <app-ticket-assignee-selector
      [assignees]="assignees$ | async"
      (select)="setAssignee($event)"
    ></app-ticket-assignee-selector>
    <app-ticket-commands></app-ticket-commands>
  `
})
export class TicketDetailsPage implements OnInit {
  ticket$: Observable<Ticket & { assignee: Assignee }>;
  assignees$: Observable<Assignee[]>;

  constructor(private store: Store<TicketFeature>) {
    this.ticket$ = this.store.pipe(select(activeTicket));
    this.assignees$ = this.store.pipe(select(selectAll));
  }

  ngOnInit(): void {
    this.store.dispatch(ticketAssigneesLoadAll());
  }

  setAssignee(assignee: Assignee) {
    this.store.dispatch(ticketSetAssignee({ payload: assignee }));
  }
}
