import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCreationForm } from './ticket-creation/ticket-creation-form.component';
import { TicketCreationPage } from './ticket-creation/ticket-creation-page.component';
import { TicketListPage } from './ticket-list/ticket-list-page.component';
import { TicketListItem } from './ticket-list/ticket-list-item.component';
import { TicketFilterText } from './ticket-filter/ticket-filter-text.component';
import { TicketDetailsPage } from './ticket-details/ticket-details-page.component';
import { TicketAssigneeSelector } from './ticket-details/ticket-assignee-selector.component';
import { TicketInformation } from './ticket-details/ticket-information.component';
import { TicketCommands } from './ticket-details/ticket-commands.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { StoreModule } from '@ngrx/store';
import { ticketReducers, ticketFeatureName } from './ticket-feature-setup';
import { EffectsModule } from '@ngrx/effects';
import { TicketListEffects } from './ticket-list/ticket-list.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketApp } from './ticket-app.component';
import { TicketCreationEffects } from './ticket-creation/ticket-creation.effects';
import { TicketAssigneeEffects } from './ticket-details/ticket-assignee.effects';
import { TicketFiltersContainer } from './ticket-filter/ticket-filters-container.component';

@NgModule({
  declarations: [
    TicketCreationForm,
    TicketCreationPage,
    TicketListPage,
    TicketListItem,
    TicketFilterText,
    TicketDetailsPage,
    TicketAssigneeSelector,
    TicketInformation,
    TicketCommands,
    TicketApp,
    TicketFiltersContainer
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureName, ticketReducers),
    EffectsModule.forFeature([
      TicketCreationEffects,
      TicketListEffects,
      TicketAssigneeEffects
    ]),
    TicketRoutingModule,
    ReactiveFormsModule
  ]
})
export class TicketModule {}
