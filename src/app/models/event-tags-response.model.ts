import { EventTagsData } from './event-tags-data.model';

export interface EventTagsResponse {
  data: EventTagsData;
  message: string;
  status: number;
  error: string | null;
  disabled: boolean;
  update: boolean;
  external_rating: any;
}
