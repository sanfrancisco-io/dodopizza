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
export default function CardSecondBonus() {
    const classes = useStyles();

    return (
        <Card className={classes.root} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="bonus"
                height="140"
                image="https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1631191277_d74d8d07e3874661ad21209898d6a107.jpeg"
            />
            <CardContent>
                <p className={classes.title}>
                    Дарим пиццу при первом заказе через приложение.
                </p>
                <p className={classes.content}>
                    Откройте приложение и переключитесь на вкладку «В зале». Cделайте заказ, заберите в пиццерии и получите скидку 10%. Оплата совершается только картой. Акция действует в период с 27 июля по 15 октября. Скидка не суммируется с комбо.

                </p>
            </CardContent>
        </Card>
    );
}
