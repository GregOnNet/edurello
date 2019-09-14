import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';
import {
  ticketListReducer,
  TicketsSlice
} from './ticket-list/ticket-list.reducer';
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
    tickets: ticketListReducer,
    ticketAssignees: ticketAssigneesReducer,
    ticketFilter: ticketFilterReducer
  })(state, action);
}

export const ticketFeature = createFeatureSelector<TicketFeature>('ticket');
