import { render, screen } from '@testing-library/react';
import { StoryAttributes } from './StoryAttributes';
import { BrowserRouter } from 'react-router-dom';

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

describe('When story contain kids', () => {
  it('renders the score', () => {
    render(<StoryAttributes story={story} />);

    const result = screen.getByText(/45 points by Alex/);
    expect(result).toBeInTheDocument();
  });

  it('renders 2 dividers', () => {
    render(<StoryAttributes story={story} />);

    const result = screen.getAllByTestId('divider');
    expect(result.length).toEqual(2);
  });

  it('renders comments quantity', () => {
    render(<StoryAttributes story={story} />);

    const result = screen.getByText(/3 comments/);
    expect(result).toBeInTheDocument();
  });
});

describe('When story contain kids and withLink', () => {
  it('renders the link', () => {
    render(
      <BrowserRouter>
        <StoryAttributes story={story} withLink />
      </BrowserRouter>
    );

    const result = screen.getByRole('link', { name: /3 comments/ });
    expect(result).toBeInTheDocument();
  });
});

const storyWithoutKids = { ...story, kids: [] };

describe('When story do not contain kids', () => {
  it('renders 1 divider when kids not exist', () => {
    render(<StoryAttributes story={storyWithoutKids} />);

    const result = screen.getAllByTestId('divider');
    expect(result.length).toEqual(1);
  });
});
