import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Show from '../components/Show';

test('renders Show component', () => {
  const show = {
    id: 1,
    image: {
      medium: 'abc.jpg',
    },
    name: 'Show Name',
  };
  const backgroundColor = 'rgb(73, 114, 191)';
  const { container } = render(
    <Router>
      <Show Show={show} backgroundColor={backgroundColor} />
    </Router>,
  );

  expect(container.innerHTML).toMatchSnapshot();
});
