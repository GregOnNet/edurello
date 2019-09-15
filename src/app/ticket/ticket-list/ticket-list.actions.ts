import { createAction, props } from '@ngrx/store';
import { Ticket } from '../ticket';

export const ticketsLoadAll = createAction(
  '[Ticket Page] Initiate loading all tickets'
);

export const ticketsLoadAllSuccess = createAction(
  '[Ticket API] Success loading all tickets',
  props<{ payload: Ticket[] }>()
);

export const ticketAddCreated = createAction(
  '[Ticket API] Cache created ticket',
  props<{ payload: Ticket }>()
);

export const ticketCacheCreated = createAction(
  '[Ticket API] Cache created ticket',
  props<{ payload: Ticket }>()
);

export const ticketComplete = createAction(
  '[Ticket Details Page] Complete ticket'
);

export const ticketCompleteSuccess = createAction(
  '[Ticket Details Page] Success completing ticket',
  ({ payload }: { payload: Ticket }) => ({
    payload: {
      id: payload.id,
      changes: payload
    }
  })
);
