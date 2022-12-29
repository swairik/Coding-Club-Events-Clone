import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventTagsComponent } from './components/event-tags/event-tags.component';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';
import { EventTabsComponent } from './components/event-tabs/event-tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventTagsComponent,
    EventsDashboardComponent,
    EventTabsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
