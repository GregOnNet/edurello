import { createReducer, on } from '@ngrx/store';
import { ticketSetDescriptionFilter } from './ticket-filter.actions';

export interface TicketFilterSlice {
  query: string;
}

export const initialState: TicketFilterSlice = {
  query: ''
};

export const ticketFilterReducer = createReducer(
  initialState,
  on(ticketSetDescriptionFilter, (slice, { payload }) => ({
    ...slice,
    query: payload
  }))
);
