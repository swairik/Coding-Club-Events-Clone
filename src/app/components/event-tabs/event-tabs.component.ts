import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCategory, EventSubCategory } from 'src/app/enums';

@Component({
  selector: 'app-event-tabs',
  templateUrl: './event-tabs.component.html',
  styleUrls: ['./event-tabs.component.scss'],
})
export class EventTabsComponent {
  allEventCategories: EventCategory[] = [];
  allEventSubCategories: EventSubCategory[] = [];
  activeEventCategory!: string;
  activeEventSubCategory!: string;

  eventCategory!: EventCategory;
  eventSubCategory!: EventSubCategory;
  selectedTagList: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.allEventCategories = [
      EventCategory.ALL_EVENTS,
      EventCategory.WEBINAR,
      EventCategory.CODING_EVENT,
      EventCategory.BOOTCAMP_EVENT,
      EventCategory.WORKSHOPS,
    ];
    this.allEventSubCategories = [
      EventSubCategory.UPCOMING,
      EventSubCategory.ARCHIVED,
      EventSubCategory.ALL_TIME_FAVOURITES,
    ];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.activeEventCategory = params['event_category']
        ? params['event_category']
        : this.allEventCategories[0];
      this.activeEventSubCategory = params['event_sub_category']
        ? params['event_sub_category']
        : this.allEventSubCategories[0];
      // this.eventCategory = params['event_category'];
      // this.eventSubCategory = params['event_sub_category'];
    });
  }

  changeRoute() {
    this.router.navigate(['/events'], {
      queryParams: {
        event_category: this.activeEventCategory,
        event_sub_category: this.activeEventSubCategory,
        tags: this.selectedTagList.join(','),
        page: 1,
      },
    });
  }

  handleEventCategoryChange(event: EventCategory) {
    this.activeEventCategory = event;
    this.activeEventSubCategory = this.allEventSubCategories[0];

    this.changeRoute();
  }

  handleEventSubCategoryChange(event: EventSubCategory) {
    this.activeEventSubCategory = event;

    this.changeRoute();
  }

  getExtension(event: EventCategory): string {
    if (
      event === EventCategory.BOOTCAMP_EVENT ||
      event === EventCategory.WORKSHOPS
    )
      return 'png';
    return 'svg';
  }
}
