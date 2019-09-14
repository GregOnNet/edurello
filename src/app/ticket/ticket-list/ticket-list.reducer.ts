import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Ticket } from '../ticket';
import { createReducer, on } from '@ngrx/store';
import { ticketsLoadAllSuccess } from './ticket-list.actions';

export interface TicketsSlice extends EntityState<Ticket> {}

export const adapter = createEntityAdapter<Ticket>();

const initialState = adapter.getInitialState();

export const ticketListReducer = createReducer(
  initialState,
  on(ticketsLoadAllSuccess, (slice, { payload }) =>
    adapter.addAll(payload, { ...slice, isLoading: false })
  )
);
