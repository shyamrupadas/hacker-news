import React from 'react';
import { formatDistanceToNow } from 'date-fns';

type DateProps = {
  time: number;
};

export const PostedDate: React.FC<DateProps> = ({ time }) => {
  return <>{formatDistanceToNow(new Date(time * 1000))} ago</>;
};
