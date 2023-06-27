import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '@store/store';
import { me } from '@store/sagas/actions';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { OrdersPage } from '@pages/Orders';
import { MenuPage } from '@pages/Menu';
import { Settings } from '@pages/Settings';
import './App.css';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/'} element={<Home/>}>
              <Route path={'/orders'} element={<OrdersPage/>}/>
              <Route path={'/menu'} element={<MenuPage/>}/>
              <Route path={'/settings'} element={<Settings/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
};
