import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStories } from '../../store/storySlice';
import { PreviewStory } from '../../components/PreviewStory';
import { StoryType } from '../../types/types';
import s from './StoriesPage.module.css';

export const StoriesPage = () => {
  const { stories, error, loading } = useTypedSelector(state => state.storySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  if (error) return <h1>{error}</h1>

  if (loading) return <h1>Loading...</h1>

  return (
    <div className={s.container}>
      <header>
      <h1>
        Hacker-news
      </h1>
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
        (c) <a href="https://github.com/shyamrupadas">shyamrupadas</a> 2022
      </footer>
    </div>
  );
};
