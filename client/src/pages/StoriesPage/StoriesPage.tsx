import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../../store/storySlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PreviewStory } from '../../components/PreviewStory';
import { StoryType } from '../../types/types';

export const StoriesPage = () => {
  const { stories, error, loading } = useTypedSelector(state => state.storySlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  if (error) return <h1>{error}</h1>

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <header>
      <h1>
        Hacker-news
      </h1>
      </header>
      <main>
        <ol>
          {stories.map((story: StoryType) => (
            <li>
              <PreviewStory key={story.id} story={story} />
            </li>
          ))}
        </ol>
      </main>
      <footer>
        (c) <a href="https://github.com/shyamrupadas">shyamrupadas</a> 2022
      </footer>
    </>
  );
};
