import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchStories } from '../../store/storySlice';
import { PreviewStory } from '../../components/PreviewStory';
import { StoryType } from '../../types/types';
import { RefreshButton } from '../../components/RefreshButton';
import { useRefreshPage } from '../../hooks/useRefreshPage';

export const StoriesPage = () => {
  const { stories, error, loading } = useTypedSelector((state) => state.storySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  useRefreshPage(fetchStories);

  const handleRefreshButtonClick = () => {
    dispatch(fetchStories());
  };

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <header>
        <h1>Hacker News</h1>
        <RefreshButton onClick={handleRefreshButtonClick} pending={loading} />
      </header>
      <main>
        <ol>
          {/* Чтобы пользователю, который зашел со страницы новости и перешел на главную,
              не показывалась одна новость на главной, пока подгружается весь список */}
          {stories.length > 1 &&
            stories.map((story: StoryType) => (
              <li key={story.id}>
                <PreviewStory story={story} />
              </li>
            ))}
        </ol>
      </main>
    </>
  );
};
