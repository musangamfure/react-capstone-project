import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      shows: {
        categories: ['Drama', 'Comedy', 'Action'],
        Shows: [
          {
            id: 1, name: 'Show 1', image: { medium: 'abc.jpg' }, category: ['Drama'],
          },
          {
            id: 2, name: 'Show 2', image: { medium: 'abc.jpg' }, category: ['Comedy'],
          },
          {
            id: 3, name: 'Show 3', image: { medium: 'abc.jpg' }, category: ['Action'],
          },
        ],
      },
    };

    store = mockStore(initialState);
  });

  it('renders shows based on selected category', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    // Initial rendering should show all shows
    // Initial rendering should show all shows
    expect(screen.getByText('Show 1')).toBeInTheDocument();
    expect(screen.getByText('Show 2')).toBeInTheDocument();
    expect(screen.getByText('Show 3')).toBeInTheDocument();

    // Select Comedy category
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Comedy' } });

    // Only Show 2 should be visible
    expect(screen.queryByText('Show 1')).not.toBeInTheDocument();
    expect(screen.getByText('Show 2')).toBeInTheDocument();
    expect(screen.queryByText('Show 3')).not.toBeInTheDocument();
  });
});
