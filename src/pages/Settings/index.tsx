import { Link } from 'react-router-dom';

export const Settings = () => {
    return (
        <>
            <Link to="/menu">Menu</Link>
            <div>Settings</div>
            <Link to="/">Orders</Link>
        </>
    );
};
