import { render, screen } from '@testing-library/react';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';

test('renders learn react link', () => {
  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
