import React, { useEffect } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStory } from '../../store/storySlice';
import { Comment } from '../../components/Comment';
import { Divider } from '../../components/Divider';
import { Button } from '../../components/Button';

export const StoriesItemPage = ({ match }: RouteComponentProps<{ id: string }>) => {
  const storyId = +match.params.id;
  const story = useTypedSelector((state) => state.storySlice.stories.find(story => story.id === storyId));
  const { error, loading } = useTypedSelector(state => state.storySlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId, dispatch]);

  const handleRefreshButtonClick = () => {
    dispatch(fetchStory(storyId))
  }

  if (error) return <h1>{error}</h1>

  if (loading) return <h1>Loading...</h1>

  return story?.time ? (
    <div>
      <NavLink to='/'>
        Back to news list
      </NavLink>
      <Divider />
      <a href={story.url} target={'_blank'}>
        Read the original
      </a>
      <Divider />
      <Button onClick={handleRefreshButtonClick}>Refresh</Button>
      <h4>{story.title}</h4>
      {story.kids?.map((kid: number) =>
        <Comment key={kid} kid={kid} />
      )}
    </div>
  ) : null;
};
