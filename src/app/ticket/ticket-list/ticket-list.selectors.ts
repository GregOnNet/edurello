import { createSelector } from '@ngrx/store';
import { ticketFeature } from '../ticket-feature-setup';
import { adapter } from './ticket-list.reducer';

export const ticketSlice = createSelector(
  ticketFeature,
  feature => feature.tickets
);

export const hasNoTicketsLoaded = createSelector(
  ticketSlice,
  slice => slice.ids.length === 0
);

export const { selectAll } = adapter.getSelectors(ticketSlice);
