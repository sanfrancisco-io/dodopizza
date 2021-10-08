import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    LinkStyles: {
        textDecoration: ' none',
        color: 'unset'
    },
})
const LinkNavbar = () => {
    const classes = useStyles();
    return (
        <>
            <Link className={classes.LinkStyles} to='bonus'>
                <li className='nav-item'>Акции</li>
            </Link>
            <Link className={classes.LinkStyles} to='favorite'>
                <li className='nav-item'>Избранные</li>
            </Link>
        </>
    );
};

export default LinkNavbar;