import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <>
            <Link to="/">Orders</Link>
            <div>Menu</div>
            <Link to="/settings">Settings</Link>
        </>
    );
};
