import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const StoriesItemPage = ({ match }: RouteComponentProps<{ id: string}>) => {
  const storyId = +match.params.id;

  return (
    <div>
    Hello! That's story number {storyId}!
    </div>
  );
};
