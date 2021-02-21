import { NavLink } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <nav className='header'>
            <NavLink to='/'>Link palgun lao</NavLink>
            Barra
        </nav>
    );
}
export default Navbar;