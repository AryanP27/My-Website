import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Welcome heading', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders About me section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/about me/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders My Projects button', () => {
  render(<App />);
  const projectsButton = screen.getByText(/my projects/i);
  expect(projectsButton).toBeInTheDocument();
});

test('clicking My Projects button works', () => {
  render(<App />);
  const projectsButton = screen.getByText(/my projects/i);
  fireEvent.click(projectsButton);
  expect(projectsButton).toBeInTheDocument();
});
