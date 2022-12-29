import { numOfEventsPerPage } from './api.constant';

export const getOffset = (page: number): number => {
  return Math.max(0, (page - 1) * numOfEventsPerPage);
};
