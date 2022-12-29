import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getOffset } from 'src/app/auxilliary-functions.constant';
import { EventCategory, EventSubCategory } from 'src/app/enums';
import { Event, EventsResponse } from 'src/app/models';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss'],
})
export class EventsDashboardComponent implements OnInit {
  eventsList!: Event[];
  isLoading: Boolean = false;
  totalNumberOfPages: number = 1;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const eventCategory = params['event_category'];
      const eventSubCategory = params['event_sub_category'];
      const tagList = params['tags'];
      const page = params['page'];

      if (eventCategory && eventSubCategory && page) {
        this.getAllEvents(
          params['event_category'],
          params['event_sub_category'],
          params['tags'],
          params['page']
        );
      } else {
        this.router.navigate(['/events'], {
          queryParams: {
            event_category: EventCategory.ALL_EVENTS,
            event_sub_category: EventSubCategory.UPCOMING,
            tags: '',
            page: 1,
          },
        });
      }
    });
  }

  getAllEvents = (
    eventCategory: EventCategory,
    eventSubCategory: EventSubCategory,
    tagList: string,
    page: number
  ) => {
    this.isLoading = true;
    this.eventService
      .getEvents(eventCategory, eventSubCategory, tagList, getOffset(page))
      .subscribe({
        next: (res: EventsResponse) => {
          this.eventsList = res.data.events;
          this.totalNumberOfPages = res.data.page_count;
          // console.log(res.data.page_count);

          // console.log(res.data.events);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('SOMETHING WENT WRONG!', err);
          this.isLoading = false;
        },
      });
  };
}
