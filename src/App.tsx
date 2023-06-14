import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Orders } from '@pages/Orders';
import { Menu } from '@pages/Menu';
import { Settings } from '@pages/Settings';

export const routes = [
    { id: 1, path: '/', element: <Orders /> },
    { id: 2, path: '/menu', element: <Menu /> },
    { id: 3, path: '/settings', element: <Settings /> },
];

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routes.map(({ path, element, id }) => (
                        <Route path={path} element={element} key={id} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
};
