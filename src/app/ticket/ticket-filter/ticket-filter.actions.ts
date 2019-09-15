import { createAction, props } from '@ngrx/store';

export const ticketSetDescriptionFilter = createAction(
  '[Ticket Filter] Set filter for ticket descriptions',
  props<{ payload: string }>()
);
