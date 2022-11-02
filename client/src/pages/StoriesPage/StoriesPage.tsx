import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../../store/storySlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const StoriesPage = () => {
  const { stories, error, loading } = useTypedSelector(state => state.storySlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  if (error) return <h1>{error}</h1>

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      {stories.map(({ id, by, title }) => (
        <div key={id}>By {by} - {title}
          <NavLink to={`story/${id}`}>Link</NavLink>
        </div>

      ))}
    </div>
  );
};
