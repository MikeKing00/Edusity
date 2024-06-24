import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
      const [sticky, setSticky] = useState(false);

      useEffect(()=> {
        window.addEventListener('scroll', ()=>{
          // เราสกรอ > 50 ไหม ถ้าใช่ setSticky (true) : ถ้าไม่ใช่setSticky (false)
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
      },[]);

      const [menuOutside , setMenuOutside] = useState(false)
      const showMenu = () => {
        menuOutside ? setMenuOutside(false) : setMenuOutside(true);
      }

  return (
  <nav className={`container ${sticky? 'dark-nav' : '' }`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={menuOutside? '' : 'hide-menu-icon'}>
            <li><Link to='hero' smooth='true' offset={-260} duration={500}>Home</Link></li>
            <li><Link to='program' smooth='true' offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth='true' offset={-140} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth='true' offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='Slider' smooth='true' offset={-260} duration={500}>Testimonials</Link></li>
            <button><Link to='contact' smooth='true' offset={-200} duration={500}className='Cnt-btn'>Contact us</Link></button>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={showMenu}/>
    </nav>
  )
}

export default Navbar