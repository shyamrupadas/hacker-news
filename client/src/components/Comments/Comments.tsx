import React, { useEffect, useState } from 'react';
import { CommentType } from '../../types/types';
import { getComment } from '../../api';

type CommentProps = {
  kid: number
};

export const Comments: React.FC<CommentProps> = ({ kid }) => {
  const [comment, setComment] = useState<CommentType>({});
  // const [showComment, setShowComment] = useState<boolean>(false);

  useEffect(() => {
    getComment(kid).then(data => data && setComment(data));
  }, [kid]);

  if (comment.deleted) return null;
  return (
    <div>
      {comment.text}
    </div>
  );
};
