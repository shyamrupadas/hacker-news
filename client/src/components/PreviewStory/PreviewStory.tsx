import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoryAttributes } from '../StoryAttributes';
import { StoryType } from '../../types/types';

import s from './PreviewStory.module.css';

type PreviewStoryType = {
  story: StoryType
};

export const PreviewStory: React.FC<PreviewStoryType> = ({ story }) => {
  const { id, title } = story;

  return (
    <div className={s.container}>
      <h3>
        <NavLink to={`story/${id}`}>
          {title}
        </NavLink>
      </h3>
      <StoryAttributes story={story} withLink />
    </div>
  );
};
