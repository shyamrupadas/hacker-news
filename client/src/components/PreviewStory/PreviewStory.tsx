import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import s from './PreviewStory.module.css';
import { Divider } from '../Divider';

export const PreviewStory = ({ story }: any) => {
  const { id, by, title, score } = story;

  return (
    <div className={s.container}>
      <h4>
        <NavLink to={`story/${id}`}>
          {title}
        </NavLink>
      </h4>
      <div>
        {score} points by {by}
        <Divider />
        {story.time && formatDistanceToNow(new Date(story.time * 1000))} ago
        {story.kids?.length &&
          <span>
        <Divider />
            {story.descendants > 0
              ?
              <NavLink to={`story/${id}`}>
                {story.descendants} comments
              </NavLink>
              :
              <>
                {story.descendants} comments
              </>
            }
        </span>
        }
      </div>
    </div>
  );
};
