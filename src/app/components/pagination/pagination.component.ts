import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { numOfEventsPerPage } from 'src/app/api.constant';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input('totalNumberOfPages') totalNumberOfPages!: number;
  numEvents = numOfEventsPerPage;
  currentPage!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? parseInt(params['page'], 10) : 1;
    });
  }

  selectPage(page: string) {
    console.log(this.currentPage);
    this.currentPage = page ? parseInt(page, 10) : 1;

    this.handlePageChange(this.currentPage);
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  getCollectionSize() {
    return Math.max(this.totalNumberOfPages * numOfEventsPerPage, 1);
  }

  handlePageChange(event: number) {
    // console.log(event);

    this.route.queryParams.subscribe((params) => {
      this.router.navigate(['/events'], {
        queryParams: {
          event_category: params['event_category'],
          event_sub_category: params['event_sub_category'],
          tags: params['tags'],
          page: event,
        },
      });
    });
  }
}
