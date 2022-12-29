import { RegisteredUsers } from './registered-users.model';

export interface Event {
  id: number;
  name: string;
  short_desc: string;
  cover_picture: string;
  registration_start_time: number;
  registration_end_time: number;
  event_start_time: number;
  event_end_time: number;
  venue: string;
  fees: number;
  currency: string;
  registration_status: string;
  user_already_registered: boolean | null;
  start_time: number;
  end_time: number;
  registered_users: RegisteredUsers;
  seats_left: number;
  seats_filled: number;
  slug: string;
  orderable_key: string;
  has_started: boolean;
  highlight_event: boolean;
  card_tags: string[];
  mobile_cover_picture: string;
  is_college_specific: boolean;
  event_category: string;
  event_sub_category: string;
}
