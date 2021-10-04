import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { clientContext } from '../../contexts/ClientContext';
import '../../variables/Variables.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '0 10px 10px 10px',
        width: 280,
        minWidth: 240,
        height: 550,
        fontFamily: `'Rubik'`,
        border: "none",
        boxShadow: "none",

    },
    media: {
        height: '280px',
        width: '280px',
        transition: '.5s',
        '&:hover': {
            marginTop: '3px',
            transition: '.5s'
        }
    },
    textContent: {
        color: 'rgb(92, 99, 112)',
        fontFamily: 'Rubik'
    },
    priceContent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Rubik',
        fontWeight: 'normal',
        paddingTop: '20px'
    },
    buttonStyles: {
        fontFamily: 'Rubik',
        fontWeight: 'normal',
        outline: 'none',
        border: 'none',
        color: 'rgb(209, 87, 0);',
        borderRadius: '15px',
        backgroundColor: 'rgb(255, 240, 230)',
        width: '120px',
        height: '35px',
        transition: '0.5s',
        fontSize: '17px',
        '&:hover': {
            backgroundColor: '#f7c4b2',
            transition: '0.5s'
        }
    },
    titleStyles: {
        fontSize: '23px'
    }
});

export default function MediaCard({ item }) {
    const classes = useStyles();
    const { addAndDeletePizzaInCart } = useContext(clientContext)
    return (
        <div className='maincontentcard'>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.photo}
                    />
                    <CardContent>
                        <Typography variant="h6" className={classes.titleStyles} component="h2">
                            {item.title}
                        </Typography>
                        <Typography className={classes.textContent} variant="body2" component="p">
                            {item.description}
                        </Typography>
                        <Typography className={classes.cardDisplay} variant="h6">
                            От {item.price} сом
                            <button
                                className={classes.buttonStyles}
                                onClick={() => addAndDeletePizzaInCart(item)}
                                size="small"
                                color="primary">
                                В корзину
                            </button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
