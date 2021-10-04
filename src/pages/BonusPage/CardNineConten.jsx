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
export default function CardNineContent() {
    const classes = useStyles();

    return (
        <Card className={classes.root} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="bonus"
                height="140"
                image="https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1619528830_61d739b8f22343af9fd35f28e08a4ec1.jpeg"
            />
            <CardContent>
                <p className={classes.title}>
                    «Гавайская» пицца по классическому рецепту
                </p>
                <p className={classes.content}>
                    Алоха! «Гавайская» пицца теперь с ветчиной. А еще в ней сливочная моцарелла, тропический ананас и пицца - соус. Попробуйте и поймайте волну удовольствия!

                </p>
            </CardContent>
        </Card>
    );
}
