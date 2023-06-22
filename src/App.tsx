import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '@store/store';
import { me } from '@store/reducers/rootReducer';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
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
            <Route
                path={'/'}
                element={<Login/>}
            />
            <Route
                path={'/home'}
                element={<Home/>}
            />
          </Routes>
        </BrowserRouter>
      </div>
  );
};
