import { render, screen } from '@testing-library/react';

import { StoriesPage } from './StoriesPage';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('When App start', () => {
  it('renders the page header', () => {
    render(
      <Provider store={store}>
        <StoriesPage />
      </Provider>
    );

    const result = screen.getByRole('heading', { name: 'Hacker News' });
    expect(result).toBeInTheDocument();
  });

  it('renders refresh button', () => {
    render(
      <Provider store={store}>
        <StoriesPage />
      </Provider>
    );

    const result = screen.getByRole('button', { name: /Refresh/ });
    expect(result).toBeInTheDocument();
  });

  it('renders the list of news', () => {
    render(
      <Provider store={store}>
        <StoriesPage />
      </Provider>
    );

    const result = screen.getByRole('list');
    expect(result).toBeInTheDocument();
  });
});
