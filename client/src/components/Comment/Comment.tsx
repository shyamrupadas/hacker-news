import React, { useEffect, useState } from 'react';
import { CommentType } from '../../types/types';
import { getComment } from '../../api';
import { Divider } from '../Divider';
import { formatDistanceToNow } from 'date-fns';

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
    <div>
      <header>
        <span>{comment.by}</span>
        <Divider />
        {formatDistanceToNow(new Date(comment.time * 1000))} ago
        <span onClick={handleCommentClick}>
          {comment.kids?.length && !showChildComments ? (
            <>
              <Divider />
              <span>[{comment.kids?.length} more]</span>
            </>
          ) : (
            <>
              <Divider />
              <span>[-]</span>
            </>
          )}
        </span>
      </header>
      {comment.text && (
        <p onClick={handleCommentClick} dangerouslySetInnerHTML={{ __html: comment.text }} />
      )}
      {showChildComments &&
        comment.kids &&
        comment.kids.map((kid: number) => <Comment key={kid} kid={kid} />)}
    </div>
  );
};
