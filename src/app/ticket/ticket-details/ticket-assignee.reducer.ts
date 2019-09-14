import { createReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Assignee } from '../assignee';

export interface TicketAssigneesSlice extends EntityState<Assignee> {}

const adapter = createEntityAdapter<Assignee>();
const initialState = adapter.getInitialState();

export const ticketAssigneesReducer = createReducer(initialState);
