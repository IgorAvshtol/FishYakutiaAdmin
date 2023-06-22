import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '@store/store';
import { me } from '@store/reducers/rootReducer';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import './App.css';
import { Orders } from '@pages/Orders';
import { Menu } from '@pages/Menu';
import { Settings } from '@pages/Settings';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route
                path={'/login'}
                element={<Login/>}
            />
            <Route
                path={'/'}
                element={<Home/>}
            >
              <Route
                  path={'/orders'}
                  element={<Orders/>}
              />
              <Route
                  path={'/menu'}
                  element={<Menu/>}
              />
              <Route
                  path={'/settings'}
                  element={<Settings/>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
};
