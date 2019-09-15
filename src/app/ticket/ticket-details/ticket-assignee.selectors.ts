import { createSelector } from '@ngrx/store';
import { ticketFeature } from '../ticket-feature-setup';
import { adapter } from './ticket-assignee.reducer';

export const ticketAssigneesSlice = createSelector(
  ticketFeature,
  feature => feature.ticketAssignees
);

export const { selectAll } = adapter.getSelectors(ticketAssigneesSlice);
