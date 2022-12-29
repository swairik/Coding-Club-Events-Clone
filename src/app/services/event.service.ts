import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getEventsURL, getEventTagsURL } from '../api.constant';
import { EventCategory, EventSubCategory, Parameters } from '../enums';
import { EventsResponse, EventTagsResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents = (
    eventCategory: EventCategory,
    eventSubCategory: EventSubCategory,
    tagList: string,
    offset: number
  ): Observable<EventsResponse> => {
    let params = new HttpParams();
    params = params.append(Parameters.EVENT_CATEGORY, eventCategory);
    params = params.append(Parameters.EVENT_SUB_CATEGORY, eventSubCategory);
    params = params.append(Parameters.TAGLIST, tagList);
    params = params.append(Parameters.OFFSET, offset);
    return this.http.get<EventsResponse>(getEventsURL, { params });
  };

  getEventsTagsList = (): Observable<EventTagsResponse> => {
    return this.http.get<EventTagsResponse>(getEventTagsURL);
  };
}
