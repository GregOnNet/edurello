import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-commands',
  template: `
    <button (click)="emitComplete()">COMPLETE</button>
  `,
  styles: []
})
export class TicketCommands {
  @Output() complete = new EventEmitter<Ticket>();

  emitComplete() {
    this.complete.emit();
  }
}
