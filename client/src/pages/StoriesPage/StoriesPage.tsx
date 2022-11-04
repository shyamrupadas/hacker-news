import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStories } from '../../store/storySlice';
import { PreviewStory } from '../../components/PreviewStory';
import { StoryType } from '../../types/types';
import { Button } from '../../components/Button';

import s from './StoriesPage.module.css';

export const StoriesPage = () => {
  const { stories, error } = useTypedSelector(state => state.storySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  const handleRefreshButtonClick = () => {
    dispatch(fetchStories());
  }

  if (error) return <h1>{error}</h1>;

  return (
    <div className={s.container}>
      <header>
        <h1>Hacker-news</h1>
        <Button onClick={handleRefreshButtonClick}>Refresh</Button>
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
      <footer>
        &copy; <a href="https://github.com/shyamrupadas">shyamrupadas</a> 2022
      </footer>
    </div>
  );
};
