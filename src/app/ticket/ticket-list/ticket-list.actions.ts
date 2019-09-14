import { createAction, props } from '@ngrx/store';
import { Ticket } from '../ticket';

export const ticketsLoadAll = createAction(
  '[Ticket Page] Initiate loading all tickets'
);

export const ticketsLoadAllSuccess = createAction(
  '[Ticket API] Success loading all tickets',
  props<{ payload: Ticket[] }>()
);
