import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('When app start', () => {
  it('renders the divider', () => {
    render(<Divider />);

    const result = screen.getByTestId('divider');
    expect(result).toBeInTheDocument();
  });
});
