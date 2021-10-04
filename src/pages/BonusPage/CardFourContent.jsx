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
                image="https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/0340c406610d40c3ae0b6a43132d88dd.jpeg"
            />
            <CardContent>
                <p className={classes.title}>
                    Coca-Cola 1,5 л в подарок при заказе любых 2-х пицц на доставку
                </p>
                <p className={classes.content}>
                    Закажите 2 любые пиццы и получите гарантированный подарок 1,5л Coca Cola. Промокод B2. Акция не действует при заказе комбо и с другими акциями по промокоду. Только на доставку.
                </p>
            </CardContent>
        </Card>
    );
}
