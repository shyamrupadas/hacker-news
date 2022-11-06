import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoryType } from '../../types/types';
import { Divider } from '../Divider';

import s from './StoryAttributes.module.css';
import { PostedDate } from '../PostedDate';

type StoryAttributesType = {
  story: StoryType;
  withLink?: boolean;
};

export const StoryAttributes: React.FC<StoryAttributesType> = ({ story, withLink }) => {
  const { score, by, descendants, id, time, kids } = story;

  if (!time) return null;

  return (
    <div className={s.wrapper}>
      {score} points by {by}
      <Divider />
      <PostedDate time={time} />
      {kids?.length && (
        <span>
          <Divider />
          {withLink ? (
            <NavLink to={`story/${id}`}>{descendants} comments</NavLink>
          ) : (
            <>{descendants} comments</>
          )}
        </span>
      )}
    </div>
  );
};
