import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DisplayProvider } from './context/DisplayContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </React.StrictMode>
);