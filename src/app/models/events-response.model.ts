import { EventsData } from './events-data.model';

export interface EventsResponse {
  data: EventsData;
  message: string;
  status: number;
  error: string | null;
  disabled: boolean;
  update: boolean;
  external_rating: any;
}
