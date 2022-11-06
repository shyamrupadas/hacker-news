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
      </header>
      {comment.text && (
        <div
          className={comment.kids?.length ? s.pointer : ''}
          onClick={handleCommentClick}
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />
      )}
      {comment.kids?.length ? (
        <div className={s.expandWrapper} onClick={handleCommentClick}>
          <div className={showChildComments ? s.collapse : s.expand}></div>
          {!showChildComments ? <>{comment.kids?.length} more</> : <>collapse</>}
        </div>
      ) : null}
      {showChildComments &&
        comment.kids &&
        comment.kids.map((kid: number) => <Comment key={kid} kid={kid} />)}
    </div>
  );
};
