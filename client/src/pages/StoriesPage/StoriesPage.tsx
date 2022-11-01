import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getStoriesIds } from '../../api';

export const StoriesPage = () => {
  const [storiesIds, setStoriesIds] = useState([]);

  useEffect(() => {
    getStoriesIds()
      .then(res => {
        setStoriesIds(res);
      })
  }, []);

  return (
    <div>
      {storiesIds.map(({ id, by, title }) => (
        <div key={id}>By {by} - {title}
          <NavLink to={`story/${id}`}>Link</NavLink>
        </div>

      ))}
    </div>
  );
};
