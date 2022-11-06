import { render, screen } from '@testing-library/react';
import { PreviewStory } from './PreviewStory';
import { BrowserRouter } from 'react-router-dom';

describe('When app start', () => {
  const story = {
    by: 'Alex',
    descendants: 3,
    id: 2345,
    kids: [234, 232],
    score: 45,
    time: 2344532,
    title: 'Story Title',
    type: 'what type?',
    url: 'http://localhost'
  };

  it('renders the header', () => {
    render(
      <BrowserRouter>
        <PreviewStory story={story} />
      </BrowserRouter>
    );

    const result = screen.getByRole('heading', { name: /Story Title/ });
    expect(result).toBeInTheDocument();
  });

  it('renders the link', () => {
    render(
      <BrowserRouter>
        <PreviewStory story={story} />
      </BrowserRouter>
    );

    const result = screen.getByRole('link', { name: /Story Title/ });
    expect(result).toBeInTheDocument();
  });
});
