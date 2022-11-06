import { render, screen } from '@testing-library/react';

import { RefreshIcon } from './RefreshIcon';

describe('When App start', () => {
  it('renders the icon', () => {
    render(<RefreshIcon />);

    const result = screen.getByTestId('refresh');
    expect(result).toBeInTheDocument();
  });
});
