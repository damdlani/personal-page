import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dupa', () => {
  render(<App />);
  const linkElement = screen.getByText(/dupa/i);
  expect(linkElement).toBeInTheDocument();
});
