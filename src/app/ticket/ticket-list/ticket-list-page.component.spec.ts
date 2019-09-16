import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { select, Store, StoreModule } from '@ngrx/store';
import { RenderOptions, render } from '@testing-library/angular';
import { TicketCreationPage } from '../ticket-creation/ticket-creation-page.component';
import { TicketCreationForm } from '../ticket-creation/ticket-creation-form.component';
import { TicketFeature, ticketReducers } from '../ticket-feature-setup';
import { selectAll } from './ticket-list.selectors';
import { TicketListPage } from './ticket-list-page.component';
import { TicketListItem } from './ticket-list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const ticketFeatureState: Partial<TicketFeature> = {
  tickets: {
    ids: [1],
    entities: {
      1: { id: 1, completed: true, description: '🌜', assigneeId: 11 }
    }
  }
};

const options: RenderOptions<TicketListPage> = {
  declarations: [TicketListPage, TicketListItem],
  imports: [
    StoreModule.forRoot(
      {
        ticket: ticketReducers
      },
      { runtimeChecks: {}, initialState: { ticket: ticketFeatureState } }
    )
  ],
  schemas: [NO_ERRORS_SCHEMA]
};

describe('<app-ticket-list-page>', () => {
  describe('When a ticket description is entered', () => {
    it('adds a new ticket', async () => {
      const { queryAllByTestId } = await render(TicketListPage, options);
      expect(queryAllByTestId('ticket-item')).toHaveLength(1);
    });

    it('adds a new ticket', async () => {
      const { getByTestId } = await render(TicketListPage, options);
      expect(getByTestId('ticket-item-link').className).toBe('completed');
    });
  });
});
