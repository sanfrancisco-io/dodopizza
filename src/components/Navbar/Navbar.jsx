import React, { useContext, useState } from 'react';
import burgerMenu from '../../images/burgerYellow.svg'
import { clientContext } from '../../contexts/ClientContext';
import { Link } from 'react-scroll'
import LinkNavbar from './LinkNavbar';

const Navbar = () => {
    const { pizzasCountInCart, getPizzas } = useContext(clientContext)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeLogo = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeLogo)

    return (
        <div className='navbar'>
            <div className='container h-100'>
                <div className='nav h-100'>
                    <div className='navbar-left'>
                        <div className='navbar-lits'>
                            <Link
                                to='mainInfo'
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={500}
                            >
                                <img className={navbar ? 'nav-stickylogo active' : 'nav-stickylogo'} src='https://cdn.dodopizza.info/files/marketing/sources/RU-Dodo-Sign-sRGB.svg' alt='logo' />
                            </Link>
                            <Link
                                className='nav-item'
                                activeClass="active"
                                to="pizza"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Пицца</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="combo"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Комбо</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="snacks"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Закуски</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="desserts"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Десерты</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="beverages"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Напитки</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="othergood"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Другие товары</Link>
                            <Link
                                activeClass="active"
                                className='nav-item'
                                to="othergood"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Контакты</Link>
                            <LinkNavbar />
                        </div>
                        <div className='nav-btn' onClick={() => setMobileNavOpen(!mobileNavOpen)}>{
                            mobileNavOpen ?
                                (true) : (<button><img src={burgerMenu} alt='burger menu' /> </button>)
                        }
                        </div>
                    </div>
                    <div className='navbar-right'>
                        <button>Корзина
                            <div className='vert-line'>
                                &#124;
                            </div>
                            <span>{pizzasCountInCart}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;