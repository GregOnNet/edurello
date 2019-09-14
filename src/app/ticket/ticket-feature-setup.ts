import { Action, combineReducers } from '@ngrx/store';
import { ticketsReducer, TicketsSlice } from './ticket-list/tickets.reducer';
import {
  ticketAssigneesReducer,
  TicketAssigneesSlice
} from './ticket-details/ticket-assignee.reducer';
import {
  ticketFilterReducer,
  TicketFilterSlice
} from './ticket-filter/ticket-filter.reducer';

export const ticketFeatureName = 'ticket';

export interface TicketFeature {
  tickets: TicketsSlice;
  ticketAssignees: TicketAssigneesSlice;
  ticketFilter: TicketFilterSlice;
}

export function ticketReducers(state: TicketFeature, action: Action) {
  return combineReducers<TicketFeature>({
    tickets: ticketsReducer,
    ticketAssignees: ticketAssigneesReducer,
    ticketFilter: ticketFilterReducer
  })(state, action);
}
