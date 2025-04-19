import { formatDistanceToNow } from 'date-fns';

export const formatedNowDate = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
