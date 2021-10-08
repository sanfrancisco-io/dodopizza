import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import starIcon from '../../images/star.svg'
import { Link } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { signOut } from "firebase/auth";
import { fire } from '../../firebase'
import { authContext, useAuth } from '../../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { ADMIN } from '../../helpers/const';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
const Infobar = () => {
    const { user } = useContext(authContext)
    console.log(user);
    const logout = () => signOut(fire);
    console.log(logout);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const history = useHistory()
    const menuId = 'primary-search-account-menu';
    const classes = useStyles();
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {
                user ? (<MenuItem onClick={logout}>Выйти</MenuItem>) : (
                    <div>
                        <MenuItem onClick={() => history.push('/login')}  >Войти</MenuItem>
                        <MenuItem onClick={() => history.push('/signup')}>Регистрация</MenuItem>
                    </div>
                )
            }
        </Menu>
    );
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
                    {
                        user ? user.email === ADMIN ? <Link to='/admin'><button className='admin-button'>Админ</button></Link> : null : null
                    }
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        {
                            user ? (
                                <Avatar className={classes.orange}>Auth</Avatar>
                            ) : (<AccountCircle />)
                        }
                    </IconButton>
                    {renderMenu}
                </div>
            </div>
        </div>
    );
};

export default Infobar;