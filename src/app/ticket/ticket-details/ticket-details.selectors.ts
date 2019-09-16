import { createSelector } from '@ngrx/store';
import { ticketSlice } from '../ticket-list/ticket-list.selectors';
import { selectRouteParam } from '../../app-state-setup';
import { ticketAssigneesSlice } from './ticket-assignee.selectors';

export const activeTicket = createSelector(
  ticketAssigneesSlice,
  ticketSlice,
  selectRouteParam('ticketId'),
  (assignees, slice, ticketId) => {
    const ticket = slice.entities[ticketId];

    return !!ticket
      ? {
          ...slice.entities[ticketId],
          assignee: assignees.entities[slice.entities[ticketId].assigneeId]
        }
      : null;
  }
);
