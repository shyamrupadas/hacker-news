import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStories } from '../../store/storySlice';
import { PreviewStory } from '../../components/PreviewStory';
import { StoryType } from '../../types/types';
import { Button } from '../../components/Button';
import { useRefreshPage } from '../../hooks/useRefreshPage';

import s from './StoriesPage.module.css';

export const StoriesPage = () => {
  const { stories, error, loading } = useTypedSelector(state => state.storySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  useRefreshPage(fetchStories);

  const handleRefreshButtonClick = () => {
    dispatch(fetchStories());
  }

  if (error) return <h1>{error}</h1>;

  return (
    <div className={s.container}>
      <header>
        <h1>Hacker News</h1>
        <Button onClick={handleRefreshButtonClick} pending={loading}>Refresh</Button>
      </header>
      <main>
        <ol>
          {stories.map((story: StoryType) => (
            <li key={story.id}>
              <PreviewStory story={story} />
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
};
