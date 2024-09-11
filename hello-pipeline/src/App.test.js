import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Olá Pipeline!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Olá Pipeline!/i);
  expect(linkElement).toBeInTheDocument();
});
