
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TailorRoutes from './components/routes/TailorRoutes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <TailorRoutes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
