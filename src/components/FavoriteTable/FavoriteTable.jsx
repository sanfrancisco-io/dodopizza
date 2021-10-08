import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { clientContext } from '../../contexts/ClientContext';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '0 10px 10px 10px',
        width: 300,
        minWidth: 240,
        height: 550,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        height: 300,
        backgroundColor: 'rgb(197,199,214)'
    },
    display: {
        display: 'flex',
        paddingTop: '40px'
    },
    textContent: {
        textAlign: 'center'
    },
    priceContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    cardDisplay: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export default function FavoriteTable() {
    const classes = useStyles();
    const { favorite, getFavorites, } = useContext(clientContext)

    useEffect(() => {
        getFavorites()
    }, [])

    console.log(favorite)


    return (
        <div className={classes.display}>
            {
                favorite ?
                    (
                        favorite.pizzas.map(row => (
                            <Card key={row.pizza.id} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={row.pizza.photo}
                                        title="Contemplative Reptile" />
                                    <CardContent>
                                        <Typography className={classes.textContent} gutterBottom variant="h6" component="h2">
                                            {row.pizza.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {row.pizza.description}
                                        </Typography>
                                        <Typography variant='h6' style={{ fontWeight: 'bold' }} className={classes.priceContent}>
                                            Цена :{row.pizza.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))

                    ) : (
                        <h2>zxc</h2>
                    )
            }
        </div>
    );
}