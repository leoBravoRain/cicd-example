import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webpage created by leo', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(screen.getByText(/webpage created by leo bravo/i)).toBeInTheDocument();
});
