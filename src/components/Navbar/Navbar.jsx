import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import burgerMenu from '../../images/burgerYellow.svg'
import { clientContext } from '../../contexts/ClientContext';
import { Link } from 'react-scroll'
import LinkNavbar from './LinkNavbar';
import { IconButton, MenuItem } from '@material-ui/core';
import { Badge } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    const history = useHistory()
    return (
        <>
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
                                    to="news"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Новости</Link>
                                <LinkNavbar />
                            </div>
                        </div>
                        <div className='nav-btn' onClick={() => setMobileNavOpen(!mobileNavOpen)}>{
                            mobileNavOpen ?
                                (true) : (<button><img src={burgerMenu} alt='burger menu' /></button>)
                        }
                        </div>
                        <div className='navbar-right'>
                            <button
                                onClick={() => history.push('/cart')}
                            >Корзина
                                <div className='vert-line'>
                                    &#124;
                                </div>
                                <span>{pizzasCountInCart}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                mobileNavOpen ?
                    (
                        <>
                            <div className='cancel-block'>
                                <span onClick={() => setMobileNavOpen(!mobileNavOpen)}>&#10006;</span>
                            </div>
                            <div className='container '>

                                <Link
                                    className='mobile-item'
                                    activeClass="active"
                                    to="pizza"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Пицца</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="combo"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Комбо</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="snacks"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Закуски</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="desserts"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Десерты</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="beverages"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Напитки</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="othergood"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Другие товары</Link>
                                <Link
                                    activeClass="active"
                                    className='mobile-item'
                                    to="othergood"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Контакты</Link>
                            </div>
                        </>
                    ) : (null)
            }
        </>
    );
};

export default Navbar;