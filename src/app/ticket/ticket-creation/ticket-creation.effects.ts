import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TicketBackend } from '../ticket-backend.service';
import { ticketSave, ticketSaveSuccessful } from './ticket-creation.actions';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class TicketCreationEffects {
  ticketSave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketSave),
      exhaustMap(({ payload }) =>
        this.backend.newTicket({ description: payload.description })
      ),
      map(ticket => ticketSaveSuccessful({ payload: ticket }))
    )
  );

  constructor(private actions$: Actions, private backend: TicketBackend) {}
}
