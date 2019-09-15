import { Injectable } from '@angular/core';
import { TicketBackend } from '../ticket-backend.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import {
  ticketAssigneesLoadAll,
  ticketAssigneesLoadAllSuccess,
  ticketSetAssignee,
  ticketSetAssigneeSuccess
} from './ticket-assignee.actions';
import { TicketFeature } from '../ticket-feature-setup';
import { select, Store } from '@ngrx/store';
import { activeTicket } from './ticket-details.selectors';

@Injectable()
export class TicketAssigneeEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketAssigneesLoadAll),
      exhaustMap(() => this.backend.users()),
      map(users => ticketAssigneesLoadAllSuccess({ payload: users }))
    )
  );

  assign$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketSetAssignee),
      withLatestFrom(this.store.pipe(select(activeTicket))),
      exhaustMap(([{ payload }, ticket]) =>
        this.backend.assign(ticket.id, payload.id)
      ),
      map(assignedTicket =>
        ticketSetAssigneeSuccess({ payload: assignedTicket })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<TicketFeature>,
    private backend: TicketBackend
  ) {}
}
