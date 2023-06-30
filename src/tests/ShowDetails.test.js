import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShowDetails from '../components/ShowDetails';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  shows: {
    Shows: [
      {
        id: '1',
        name: 'Show Name',
        rating: {
          average: 8.5,
        },
        category: ['Drama', 'Thriller'],
        summary: 'Summary of the show',
        image: {
          medium: 'abc.jpg',
        },
        official: 'https://official-website.com',
        language: 'English',
      },
    ],
  },
});

test('renders ShowDetail component', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <ShowDetails />
      </Router>
    </Provider>,
  );

  expect(container.innerHTML).toMatchSnapshot();
});
