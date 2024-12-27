import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router basename={'/FE_diplom/'}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </Router>
)