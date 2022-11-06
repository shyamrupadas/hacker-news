import { render, screen } from '@testing-library/react';
import { RefreshButton } from './RefreshButton';

describe('When app start', () => {
  it('renders the button and displays Refresh', () => {
    render(<RefreshButton onClick={() => {}} />);

    const result = screen.getByRole('button', { name: /refresh/i });
    expect(result).toBeInTheDocument();
  });
});
