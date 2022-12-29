import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
