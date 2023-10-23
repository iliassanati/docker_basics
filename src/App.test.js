import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  act(() => {
    root.render(<App />);
  });

  act(() => {
    root.unmount();
  });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
