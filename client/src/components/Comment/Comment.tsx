import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { CommentType } from '../../types/types';
import { getComment } from '../../api';
import { Divider } from '../Divider';

import s from './Comment.module.css';

type CommentProps = {
  kid: number;
};

export const Comment: React.FC<CommentProps> = ({ kid }) => {
  const [comment, setComment] = useState<CommentType>({});
  const [showChildComments, setShowChildComment] = useState<boolean>(false);

  useEffect(() => {
    getComment(kid).then((data) => data && setComment(data));
  }, [kid]);

  const handleCommentClick = () => setShowChildComment(!showChildComments);

  if (comment.deleted || !comment.time) return null;

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <span>{comment.by}</span>
        <Divider />
        {formatDistanceToNow(new Date(comment.time * 1000))} ago
        <span onClick={handleCommentClick}>
          {comment.kids?.length && !showChildComments ? (
            <>
              <Divider />
              <span className={`${s.hover} ${s.em}`}>[{comment.kids?.length} more]</span>
            </>
          ) : (
            <>
              <Divider />
              <span className={comment.kids?.length ? s.hover : ''}>[-]</span>
            </>
          )}
        </span>
      </header>
      {comment.text && (
        <div
          className={s.comment}
          onClick={handleCommentClick}
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />
      )}
      {showChildComments &&
        comment.kids &&
        comment.kids.map((kid: number) => <Comment key={kid} kid={kid} />)}
    </div>
  );
};
