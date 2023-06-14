import { Link } from 'react-router-dom';

export const Orders = () => {
    return (
        <>
            <Link to="/menu">Menu</Link>
            <div>Orders</div>
            <Link to="/settings">Settings</Link>
        </>
    );
};
