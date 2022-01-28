import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument();
  });
});
