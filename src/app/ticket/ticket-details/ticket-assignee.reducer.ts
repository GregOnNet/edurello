import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Assignee } from '../assignee';
import { ticketAssigneesLoadAllSuccess } from './ticket-assignee.actions';

export interface TicketAssigneesSlice extends EntityState<Assignee> {}

export const adapter = createEntityAdapter<Assignee>();
const initialState = adapter.getInitialState();

export const ticketAssigneesReducer = createReducer(
  initialState,
  on(ticketAssigneesLoadAllSuccess, (slice, { payload }) =>
    adapter.addAll(payload, slice)
  )
);
