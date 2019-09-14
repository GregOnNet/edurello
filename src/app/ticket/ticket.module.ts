import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCreationForm } from './ticket-creation/ticket-creation-form.component';
import { TicketCreationPage } from './ticket-creation/ticket-creation-page.component';
import { TicketListPage } from './ticket-list/ticket-list-page.component';
import { TicketListItem } from './ticket-list/ticket-list-item.component';
import { TicketFilterText } from './ticket-filter/ticket-filter-text.component';
import { TicketFilterLinks } from './ticket-filter/ticket-filter-links.component';
import { TicketDetailsPage } from './ticket-details/ticket-details-page.component';
import { TicketAssigneeSelector } from './ticket-details/ticket-assignee-selector.component';
import { TicketInformation } from './ticket-details/ticket-information.component';
import { TicketCommands } from './ticket-details/ticket-commands.component';

@NgModule({
  declarations: [
    TicketCreationForm,
    TicketCreationPage,
    TicketListPage,
    TicketListItem,
    TicketFilterText,
    TicketFilterLinks,
    TicketDetailsPage,
    TicketAssigneeSelector,
    TicketInformation,
    TicketCommands
  ],
  imports: [CommonModule]
})
export class TicketModule {}
