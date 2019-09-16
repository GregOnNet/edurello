import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ticketsLoadAll } from './ticket-list/ticket-list.actions';
import { TicketFeature } from './ticket-feature-setup';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ticket-app',
  template: `
    <a routerLink="">TICKETS</a> | <a routerLink="create">CREATE TICKET</a> |
    <hr />
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketApp implements OnInit {
  constructor(private store: Store<TicketFeature>) {}

  ngOnInit() {
    this.store.dispatch(ticketsLoadAll());
  }
}
