import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { clientContext } from '../../contexts/ClientContext';
import '../../variables/Variables.css'
import BasicModal from '../CardModal/CardModal';
import { CardActions } from '@material-ui/core';
import CommentModal from '../CommentsModal/CommentModal';
import BookmarkIcon from '@material-ui/icons/Bookmark';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '0 10px 10px 10px',
        width: 280,
        minWidth: 240,
        minHeight: 600,
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
    },
    actionStyles: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
});

export default function MediaCard({ item }) {
    const { addAndDeletePizzaInFavorite, checkPizzaInFavorite } = useContext(clientContext)
    const classes = useStyles();
    return (
        <div className='maincontentcard'>
            <Card key={item.id} className={classes.root} >
                <CardMedia
                    className={classes.media}
                    image={item.photo}
                />
                <CardContent >
                    <Typography variant="h6" className={classes.titleStyles} component="h2">
                        {item.title}
                    </Typography>
                    <Typography className={classes.textContent} variant="body2" component="p">
                        {item.description}
                    </Typography>
                    <Typography className={classes.cardDisplay} variant="h6">
                        От {item.price} сом
                        <BasicModal item={item} />
                    </Typography>
                </CardContent>
                <div>
                    <CardActions>
                        <Button onClick={() => addAndDeletePizzaInFavorite(item)} className={classes.actionStyles} size="small">
                            <BookmarkIcon color={checkPizzaInFavorite(item.id) ? 'primary' : 'inherit'} /></Button>
                        <CommentModal key={item.id} />
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}
