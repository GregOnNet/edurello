import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { TicketBackend } from '../ticket-backend.service';
import { ticketsLoadAll, ticketsLoadAllSuccess } from './ticket-list.actions';
import { ticketSaveSuccessful } from '../ticket-creation/ticket-creation.actions';
import { ticketCacheCreated } from '../ticket-details/ticket-assignee.actions';

@Injectable()
export class TicketListEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsLoadAll),
      exhaustMap(() => this.backend.tickets()),
      map(tickets => ticketsLoadAllSuccess({ payload: tickets }))
    )
  );

  saveCreatedTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketSaveSuccessful),
      map(({ payload }) => ticketCacheCreated({ payload }))
    )
  );

  constructor(private actions$: Actions, private backend: TicketBackend) {}
}
