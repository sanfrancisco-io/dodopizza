import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../../variables/Variables.css';
const useStyles = makeStyles({
    title: {
        fontSize: '20px',
        fontFamily: 'Rubik',
        fontWeight: 'normal',
        marginBottom: '10px'
    },
    root: {
        width: '600 !important',
        boxShadow: '0 0 10px grey',
        marginBottom: '40px',
        fontFamily: 'Rubik',
        borderRadius: '15px !important',
        boxShadow: '0 0 15px grey !important'
    },
    content: {
        color: 'rgb(92, 99, 112)',
        fontSize: '15px',
        lineHeight: '20px'
    }
});
export default function CardFourContent() {
    const classes = useStyles();

    return (
        <Card className={classes.root} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="bonus"
                height="140"
                image="https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1631191256_b30ee604e47a4ba2a8915b4100f88987.jpeg"
            />
            <CardContent>
                <p className={classes.title}>
                    Новая пицца «Азиатская»
                </p>
                <p className={classes.content}>
                    Встречайте нашу новую жгучую новинку! Мы собрали все самые лучшие ингредиенты из Азиатской кухни и воплотили в нашей новой пицце. Попробуйте!
                </p>
            </CardContent>
        </Card>
    );
}
