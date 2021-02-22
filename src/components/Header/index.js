import { NavLink } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <nav className='header fr'>
            <NavLink to='/'>Link palgun lao</NavLink>
            Barra
            <a href="https://drive.google.com/file/d/1vLlrhed1YwdsNcAn-nHdHsira1A722Fg/view?usp=sharing">CV</a>
        </nav>
    );
}

export default Navbar;
