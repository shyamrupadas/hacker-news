import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStory } from '../../store/storySlice';
import { Menu } from '../../components/Menu';
import { RootComment } from '../../components/RootComment';

export const StoriesItemPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const storyId = +match.params.id;
  const story = useTypedSelector((state) => state.storySlice.stories.find(story => story.id === storyId));
  const { error, loading } = useTypedSelector(state => state.storySlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId, dispatch]);

  if (error) return <h1>{error}</h1>

  if (loading) return <h1>Loading...</h1>

  return story?.time ? (
    <div>
      <Menu story={story} />
      <h4>{story.title}</h4>
      {story.kids?.map((kid: number) =>
        <RootComment kid={kid} />
      )}
    </div>
  ) : null;
};
