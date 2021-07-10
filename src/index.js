import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { PinnedNotesContextProvider } from './store/pinned-notes-context';

ReactDOM.render(
  <PinnedNotesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PinnedNotesContextProvider>,
  document.getElementById('root')
);
