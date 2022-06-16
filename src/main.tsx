import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageLayout from './page/PageLayout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
);
