import { Component } from '@angular/core';
import { TicketFeature } from '../ticket-feature-setup';
import { Store } from '@ngrx/store';
import { ticketSetDescriptionFilter } from './ticket-filter.actions';

@Component({
  selector: 'app-ticket-filters-container',
  template: `
    <app-ticket-filter-text
      (update)="setTextFilter($event)"
    ></app-ticket-filter-text>
  `,
  styles: [':host { display: block; }']
})
export class TicketFiltersContainer {
  constructor(private store: Store<TicketFeature>) {}

  setTextFilter(query: string) {
    this.store.dispatch(ticketSetDescriptionFilter({ payload: query }));
  }
}
