import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hi link', () => {
  const { getByText } = render(<App />);
  const spanElement = getByText(/Hi/i);
  expect(spanElement).toBeInTheDocument();
});
