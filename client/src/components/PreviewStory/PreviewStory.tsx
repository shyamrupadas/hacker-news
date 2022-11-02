import React from 'react';
import { NavLink } from 'react-router-dom';

export const PreviewStory = ({ story }: any) => {
  const { id, by, title } = story;

  return (
    <div>
      <h4>
        <NavLink to={`story/${id}`}>
          {title}
        </NavLink>
      </h4>
      by {by} - {title}
    </div>
  );
};
