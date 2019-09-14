import { createReducer } from '@ngrx/store';

export interface TicketFilterSlice {
  query: string;
}

export const initialState: TicketFilterSlice = {
  query: ''
};

export const ticketFilterReducer = createReducer(initialState);
