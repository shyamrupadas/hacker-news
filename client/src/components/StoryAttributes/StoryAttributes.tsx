import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { StoryType } from '../../types/types';
import { Divider } from '../Divider';

import s from './StoryAttributes.module.css'

type StoryAttributesType = {
  story: StoryType
  withLink?: boolean
}

export const StoryAttributes: React.FC<StoryAttributesType> = ({ story, withLink }) => {
  const { score, by, descendants, id, time, kids } = story;

  return (
    <div className={s.wrapper}>
      {score} points by {by}
      <Divider />
      {time && formatDistanceToNow(new Date(time * 1000))} ago
      {kids?.length &&
        <span>
        <Divider />
          {withLink
            ?
            <NavLink to={`story/${id}`}>
              {descendants} comments
            </NavLink>
            :
            <>
              {descendants} comments
            </>
          }
        </span>
      }
    </div>
  )

}
