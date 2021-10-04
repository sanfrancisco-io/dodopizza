import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    LinkStyles: {
        textDecoration: ' none',
        color: 'unset'
    }
})
const LinkNavbar = () => {
    const classes = useStyles();

    return (
        <>
            <Link className={classes.LinkStyles} to='bonus'>
                <li className='nav-item'>Акции</li>
            </Link>
            <Link className={classes.LinkStyles} to='admin'>
                <li className='nav-item'>О нас</li>
            </Link>
        </>
    );
};

export default LinkNavbar;