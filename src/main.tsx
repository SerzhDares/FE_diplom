import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Router basename={'/FE_diplom/'}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StrictMode>
            <App />
          </StrictMode>
        </PersistGate>
    </Provider>
  </Router>
)
