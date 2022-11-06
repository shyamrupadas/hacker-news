import { RefreshButton } from './RefreshButton';
import { render, screen } from '@testing-library/react';

describe('When app start', () => {
  it('renders the button and displays Refresh', async () => {
    render(<RefreshButton onClick={() => {}} />);

    const result = screen.getByRole('button', { name: /refresh/i });
    expect(result).toBeInTheDocument();
  });
});
