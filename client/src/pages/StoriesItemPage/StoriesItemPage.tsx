import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStory } from '../../store/storySlice';

export const StoriesItemPage = ({ match }: RouteComponentProps<{ id: string}>) => {
  const storyId = +match.params.id;
  // const { title } = useTypedSelector(state => state.storySlice.story);
  const { story, error, loading } = useTypedSelector(state => state.storySlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId, dispatch]);

  return story.time ? (
    <div>
      <h4>{story.title}</h4>
    </div>
  ) : null;
};
