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
                image="https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1632375800_38d2b05194244d0b991e063afe3fd16e.jpeg"
            />
            <CardContent>
                <p className={classes.title}>
                    Подарок в день рождения
                </p>
                <p className={classes.content}>
                    Укажите день рождения в личном кабинете, соберите корзину на минимальную сумму доставки и примените промокод D101. Получать «Пиццу-пирог» можно хоть каждый день за 3 дня до дня рождения, в день рождения и 10 дней после. Акция не действует при заказе комбо и с другими акциями по промокоду.
                </p>
            </CardContent>
        </Card>
    );
}
