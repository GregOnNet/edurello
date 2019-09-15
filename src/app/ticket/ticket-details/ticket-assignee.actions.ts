import { createAction, props } from '@ngrx/store';
import { Ticket } from '../ticket';
import { Assignee } from '../assignee';

export const ticketAssigneesLoadAll = createAction(
  '[Ticket Details Page] Initiate loading all assignees'
);

export const ticketAssigneesLoadAllSuccess = createAction(
  '[Assignee API] Success loading all assignees',
  props<{ payload: Assignee[] }>()
);

export const ticketCacheCreated = createAction(
  '[Ticket API] Cache created ticket',
  props<{ payload: Ticket }>()
);

export const ticketSetAssignee = createAction(
  '[Ticket Details Page] Set assignee for current ticket',
  props<{ payload: Assignee }>()
);

export const ticketSetAssigneeSuccess = createAction(
  '[Ticket Details Page] Success setting assignee for current ticket',
  ({ payload }: { payload: Ticket }) => ({
    payload: {
      id: payload.id,
      changes: payload
    }
  })
);
