import { createSelector } from '@ngrx/store';
import { ticketFeature } from '../ticket-feature-setup';

export const filterSlice = createSelector(
  ticketFeature,
  f => f.ticketFilter
);

export const textFilter = createSelector(
  filterSlice,
  s => s.query
);
