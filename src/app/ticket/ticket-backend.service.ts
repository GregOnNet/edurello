import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Ticket } from './ticket';
import { Assignee } from './assignee';

function randomDelay() {
  return Math.random() * 4000;
}

@Injectable({ providedIn: 'root' })
export class TicketBackend {
  storedTickets: Ticket[] = [
    {
      id: 0,
      description: 'Install a monitor arm',
      assigneeId: 111,
      completed: false
    },
    {
      id: 1,
      description: 'Move the desk to the new location',
      assigneeId: 111,
      completed: false
    }
  ];

  storedUsers: Assignee[] = [
    { id: 111, name: 'Victor' },
    { id: 112, name: 'Jeff' },
    { id: 113, name: 'Brandon' },
    { id: 114, name: 'Wes' }
  ];

  lastId = 1;

  constructor() {}

  private findTicketById = id =>
    this.storedTickets.find(ticket => ticket.id === +id);
  private findUserById = id => this.storedUsers.find(user => user.id === +id);

  tickets() {
    return of(this.storedTickets).pipe(delay(randomDelay()));
  }

  ticket(id: number): Observable<Ticket> {
    return of(this.findTicketById(id)).pipe(delay(randomDelay()));
  }

  users() {
    return of(this.storedUsers).pipe(delay(randomDelay()));
  }

  user(id: number) {
    return of(this.findUserById(id)).pipe(delay(randomDelay()));
  }

  newTicket(payload: { description: string }) {
    const newTicket: Ticket = {
      id: ++this.lastId,
      description: payload.description,
      assigneeId: null,
      completed: false
    };

    return of(newTicket).pipe(
      delay(randomDelay()),
      tap((ticket: Ticket) => [...this.storedTickets, ticket])
    );
  }

  assign(ticketId: number, userId: number) {
    const foundTicket = this.findTicketById(+ticketId);
    const user = this.findUserById(+userId);

    if (foundTicket && user) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap(
          (ticket: Ticket) =>
            (this.storedTickets = this.storedTickets.map(t =>
              t.id === ticket.id ? { ...t, assigneeId: user.id } : t
            ))
        ),
        map(({ id }) => this.findTicketById(id))
      );
    }

    return throwError(new Error('ticket or user not found'));
  }

  complete(ticketId: number, completed: boolean) {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of(foundTicket).pipe(
        delay(randomDelay()),
        tap(
          (ticket: Ticket) =>
            (this.storedTickets = this.storedTickets.map(t =>
              t.id === ticket.id ? { ...t, completed } : t
            ))
        ),
        map(({ id }) => this.findTicketById(id))
      );
    }

    return throwError(new Error('ticket not found'));
  }
}
