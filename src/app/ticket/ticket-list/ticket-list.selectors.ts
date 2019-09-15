import { createSelector } from '@ngrx/store';
import { ticketFeature } from '../ticket-feature-setup';
import { adapter } from './ticket-list.reducer';
import { textFilter } from '../ticket-filter/ticket-filter.selectors';

export const ticketSlice = createSelector(
  ticketFeature,
  feature => feature.tickets
);

export const hasNoTicketsLoaded = createSelector(
  ticketSlice,
  slice => slice.ids.length === 0
);

export const { selectAll } = adapter.getSelectors(ticketSlice);

export const filteredTickets = createSelector(
  selectAll,
  textFilter,
  (tickets, filter) =>
    !!filter
      ? tickets.filter(t =>
          t.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
      : tickets
);
