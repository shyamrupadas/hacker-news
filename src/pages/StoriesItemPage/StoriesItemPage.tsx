import React from 'react';

export const StoriesItemPage = ({ match }: any) => {
  const storyId: number | null = +match.params.id;

  return (
    <div>
    Hello! That's story number {storyId}!
    </div>
  );
};
