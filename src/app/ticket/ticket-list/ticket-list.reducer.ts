import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Ticket } from '../ticket';
import { createReducer, on } from '@ngrx/store';
import { ticketAddCreated, ticketsLoadAllSuccess } from './ticket-list.actions';
import { ticketSetAssigneeSuccess } from '../ticket-details/ticket-assignee.actions';

export interface TicketsSlice extends EntityState<Ticket> {}

export const adapter = createEntityAdapter<Ticket>();

const initialState = adapter.getInitialState();

export const ticketListReducer = createReducer(
  initialState,
  on(ticketsLoadAllSuccess, (slice, { payload }) =>
    adapter.addAll(payload, slice)
  ),
  on(ticketAddCreated, (slice, { payload }) => adapter.addOne(payload, slice)),
  on(ticketSetAssigneeSuccess, (slice, { payload }) =>
    adapter.updateOne(payload, slice)
  )
);
