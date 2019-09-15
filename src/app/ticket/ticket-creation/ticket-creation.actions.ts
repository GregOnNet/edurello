import { createAction, props } from '@ngrx/store';
import { Ticket } from '../ticket';

export const ticketSave = createAction(
  '[Ticket Creation Page] Save new ticket',
  props<{ payload: Ticket }>()
);

export const ticketSaveSuccessful = createAction(
  '[Ticket API] Success saving new ticket',
  props<{ payload: Ticket }>()
);
