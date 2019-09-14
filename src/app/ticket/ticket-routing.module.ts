import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListPage } from './ticket-list/ticket-list-page.component';
import { TicketDetailsPage } from './ticket-details/ticket-details-page.component';
import { TicketCreationPage } from './ticket-creation/ticket-creation-page.component';

const routes: Routes = [
  {
    path: 'tickets',
    children: [
      {
        path: 'list',
        component: TicketListPage
      },
      {
        path: 'list/:query',
        component: TicketListPage
      },
      {
        path: 'create',
        component: TicketCreationPage
      },
      {
        path: 'details/:id',
        component: TicketDetailsPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {}
