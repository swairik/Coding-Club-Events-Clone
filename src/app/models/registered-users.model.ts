import { TopUser } from './top-user.model';

export interface RegisteredUsers {
  top_users: TopUser[];
  other_users_count: number;
  show_users_count: boolean;
}
