import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { TicketBackend } from '../ticket-backend.service';
import { ticketsLoadAll, ticketsLoadAllSuccess } from './ticket-list.actions';

@Injectable()
export class TicketListEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsLoadAll),
      exhaustMap(() => this.backend.tickets()),
      map(tickets => ticketsLoadAllSuccess({ payload: tickets }))
    )
  );

  constructor(private actions$: Actions, private backend: TicketBackend) {}
}
