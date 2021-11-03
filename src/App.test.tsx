import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main', () => {
  render(<App />);
  const donateElement = screen.getByText(/Donate/i);
  expect(donateElement).toBeInTheDocument();
});
 