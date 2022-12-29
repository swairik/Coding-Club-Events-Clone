import { Component } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCategory, EventSubCategory } from 'src/app/enums';
import { EventTagsResponse } from 'src/app/models';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-tags',
  templateUrl: './event-tags.component.html',
  styleUrls: ['./event-tags.component.scss'],
})
export class EventTagsComponent {
  eventCategory!: EventCategory;
  eventSubCategory!: EventSubCategory;
  originalTagList!: string[];
  tagList!: string[];
  selectedTagList: string[] = [];

  showAllTags: boolean = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllTagsFromApi();
    this.route.queryParams.subscribe((params) => {
      // console.log(params);
      this.eventCategory = params['event_category'];
      this.eventSubCategory = params['event_sub_category'];
      this.selectedTagList = params['tags'].split(',');
    });
  }

  getAllTagsFromApi = () => {
    this.eventService.getEventsTagsList().subscribe({
      next: (res: EventTagsResponse) => {
        this.originalTagList = res.data.tags;
        this.tagList = [
          ...this.selectedTagList,
          ...this.originalTagList.filter(
            (tag) => !this.selectedTagList.includes(tag)
          ),
        ];
        // removes the empty string at the beginning if selectedTagList is empty
        if (this.tagList[0] === '') this.tagList.splice(0, 1);
      },
      error: (err) => {
        console.error('Something went wrong', err);
      },
    });
  };

  handleChipListChange = (event: MatChipListboxChange) => {
    // console.log(event);

    this.selectedTagList = [...event.value];
    this.tagList = [
      ...this.selectedTagList,
      ...this.originalTagList.filter(
        (tag) => !this.selectedTagList.includes(tag)
      ),
    ];

    this.router.navigate(['/events'], {
      queryParams: {
        event_category: this.eventCategory,
        event_sub_category: this.eventSubCategory,
        tags: this.selectedTagList.join(','),
        page: 1,
      },
    });
  };

  toggleDisplayAllTags() {
    this.showAllTags = !this.showAllTags;
    console.log(this.showAllTags);
  }
}
