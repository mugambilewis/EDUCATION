import { useState } from 'react';
import { Link,  } from 'react-scroll';
import './Navbar.css'
import logo from '../../Assets/logo.png'
import menu_1 from '../../assets/menu-1.png'
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
 const ToggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
 }
  
  
  return (
    <nav className='container dark-nav'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
        </ul>
        <img src={menu_1} alt="" className='menu-icon' onClick={ToggleMenu}/>
    </nav>
  )
}

export default Navbar
