import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { select, Store, StoreModule } from '@ngrx/store';
import { RenderOptions, render } from '@testing-library/angular';
import { TicketCreationPage } from './ticket-creation-page.component';
import { TicketCreationForm } from './ticket-creation-form.component';
import { TicketFeature, ticketReducers } from '../ticket-feature-setup';
import { selectAll } from '../ticket-list/ticket-list.selectors';

const options: RenderOptions<TicketCreationPage> = {
  declarations: [TicketCreationPage, TicketCreationForm],
  imports: [
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        ticket: ticketReducers
      },
      { runtimeChecks: {} }
    )
  ]
};
describe('<app-ticket-creation>', () => {
  describe('When a ticket description is entered', () => {
    it('adds a new ticket', async () => {
      const { getByTestId, type, click } = await render(
        TicketCreationPage,
        options
      );

      const store: Store<TicketFeature> = TestBed.get(Store);
      await type(getByTestId('ticket-description'), '☀️');
      click(getByTestId('ticket-create'));

      store.pipe(select(selectAll)).subscribe(tickets => {
        expect(tickets).toHaveLength(1);
      });
    });
  });
});
