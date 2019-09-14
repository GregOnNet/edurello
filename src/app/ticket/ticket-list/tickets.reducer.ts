import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Ticket } from '../ticket';
import { createReducer } from '@ngrx/store';

export interface TicketsSlice extends EntityState<Ticket> {}

const adapter = createEntityAdapter<Ticket>();
const initialState = adapter.getInitialState();

export const ticketsReducer = createReducer(initialState);
