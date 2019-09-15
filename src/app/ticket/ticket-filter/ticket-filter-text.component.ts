import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-filter-text',
  template: `
    <input
      [formControl]="textFilter"
      type="text"
      placeholder="Filter by ticket description..."
    />
  `,
  styles: []
})
export class TicketFilterText implements OnInit, OnDestroy {
  private sink = new Subscription();
  textFilter = new FormControl();

  @Output() update = new EventEmitter<string>();

  ngOnInit() {
    this.listenToTextFilter();
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

  private listenToTextFilter() {
    this.sink.add(
      this.textFilter.valueChanges
        .pipe(
          debounceTime(200),
          distinctUntilChanged()
        )
        .subscribe(value => this.update.emit(value))
    );
  }
}
