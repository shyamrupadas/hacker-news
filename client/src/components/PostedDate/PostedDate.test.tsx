import { render, screen } from '@testing-library/react';
import { PostedDate } from './PostedDate';
import { vi } from 'vitest';

describe('When app start', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const time = 1667805141;

  it('renders the correct time', () => {
    const date = new Date(1667805000786);
    vi.setSystemTime(date);

    render(<PostedDate time={time} />);

    const result = screen.getByText(/2 minutes ago/);
    expect(result).toBeInTheDocument();
  });
});
