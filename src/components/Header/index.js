import { NavLink } from 'react-router-dom';
import './style.scss'

const Navbar = () => {
    return (
        <nav className='header fr'>
            <div className={'CVButton'}>
                <a href='https://www.linkedin.com/in/juale86/'>Aleman Juan Manuel (LinkedIn)</a>
            </div>
            <a className={'CVButton'} href="https://drive.google.com/file/d/1tgZpPwy4Qc2OMvN-0KxkDUcqeysGmuMb/view?usp=sharing">CV</a>
        </nav>
    );
}

export default Navbar;
