import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path='*' />
        <Route Component={Home} path='/' />
        <Route Component={Login} path='/login' />
        <Route Component={Books} path='/books/:id' />
      </Routes>
    </BrowserRouter>
  );
}