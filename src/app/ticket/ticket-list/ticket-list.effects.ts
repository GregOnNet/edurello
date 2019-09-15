import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { TicketBackend } from '../ticket-backend.service';
import {
  ticketCacheCreated,
  ticketComplete,
  ticketCompleteSuccess,
  ticketsLoadAll,
  ticketsLoadAllSuccess
} from './ticket-list.actions';
import { ticketSaveSuccessful } from '../ticket-creation/ticket-creation.actions';
import { Store } from '@ngrx/store';
import { TicketFeature } from '../ticket-feature-setup';
import { activeTicket } from '../ticket-details/ticket-details.selectors';

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

  completeTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketComplete),
      withLatestFrom(this.store.select(activeTicket)),
      exhaustMap(([, ticket]) => this.backend.complete(ticket.id, true)),
      map(ticket => ticketCompleteSuccess({ payload: ticket }))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<TicketFeature>,
    private backend: TicketBackend
  ) {}
}
