import React from 'react';
import starIcon from '../../images/star.svg'
import { Link } from 'react-router-dom';
const Infobar = () => {
    return (
        <div className='container'>
            <div className='info-bar'>
                <div className="nav-left">
                    <Link to='/'>
                        <img className='nav-logo' src='https://brandbook.dodopizza.info/images/RU-Dodo-Logo-Black-Letters.svg' alt='logo' />
                    </Link>
                    <div className='item-about-rating'>
                        <div className="header-logo">
                            <p>Доставка пиццы <span style={{ color: 'orange' }}> Бишкек </span></p>
                        </div>
                        <div className="bottom-logo">
                            <span>
                                36 мин &#183; 4.77 <img className='bottom-star-icon' src={starIcon} alt="starIcon" />
                            </span>
                        </div>
                    </div>
                    <div className='item-phone'>
                        <span>
                            <span className='item-child'>Звонок по</span>
                            <img className='megacom' src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg' alt="megacom" />
                            <img className='oshka' src='https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg' alt="megacom" />
                            <br />
                            0(312)550 - 550
                        </span>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to='/admin'>
                        <button className='admin-button'>
                            Админ
                        </button>
                    </Link>
                    <button>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Infobar;