import { render } from '@testing-library/react';
import Header from '../components/NavBar';

test('renders NavBar component', () => {
  const { container } = render(<Header />);
  expect(container.innerHTML).toMatchSnapshot();
});
