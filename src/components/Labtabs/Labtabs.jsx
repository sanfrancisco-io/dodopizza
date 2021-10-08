import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabPanel value={value} index={0}>
                <div className='first-news-section'>
                    <div className='title-section'>
                        <h2>Одинаково вкусно в Москве и Сыктывкаре</h2>
                    </div>
                    <div className='content-section'>
                        <span>
                            Кто угодно может сделать вкусную пиццу.
                            А шеф-повар итальянского ресторана сделает и вовсе шедевр.
                            Он молодец. Но представьте, что вам нужно сделать вкусную
                            пиццу в сотнях пиццерий, за сотни километров друг от друга.
                            Это наш случай, у нас их вон уже сколько:
                        </span>
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/fad04afd044ff19e42f3.svg" alt="aboutnews" />
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='second-news-section'>
                    <div className='title-section'>
                        <h2>Единые стандарты</h2>
                    </div>
                    <div className='content-section'>
                        <span>
                            Цифровые технологии помогают нам вовремя замечать,
                            если что-то идёт неправильно. Но как понять,
                            что правильно, а что нет? Для этого у нас есть стандарты.
                            Вот, например, про мытьё рук:
                        </span>
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/9b2321b20c46607b7bea.svg" alt="aboutnews" />
                        <span className='content-item-text'>
                            Наши стандарты — это не какие-то заумные схемы и формулы,
                            а супер-понятные правила. У нас их сотни, буквально про всё.
                            Именно так мы умудряемся делать всё хорошо и одновременно быстро расти.
                        </span>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='third-news-section'>
                    <div className='title-section'>
                        <h2>Открытость во всём</h2>
                    </div>
                    <div className='content-section'>
                        <span className='content-item-one'>
                            Кто угодно может написать сотню правил,
                            но само по себе это не работает. Нужна сила,
                            благодаря которой стандарты будут соблюдаться.
                            Для нас этой силой стала открытость. Мы сделали
                            всё настолько прозрачным, что отступать от стандартов просто не получается.
                        </span>
                        <span className='content-item-two'>
                            В чём конкретно это проявляется?
                        </span>
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/c7e5c65568dfe97195e5.svg" alt="aboutnews" />
                        <span className='content-item-third'>
                            Именно открытость заставляет нас выполнять обещания,
                            соблюдать стандарты и работать строго в рамках закона.
                            Но открытость для нас — не просто модный тренд.
                            Это наше глубокое убеждение, философия и ценность,
                            которую мы хотим нести миру.
                        </span>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='four-news-section'>
                    <div className='title-section'>
                        <h2>
                            Почему Додо
                        </h2>
                    </div>
                    <div className='content-section'>
                        <span className='content-item-one'>Знаете почему мы называемся в честь этой странной птицы?
                            Додо, или маврикийские дронты, были очень доверчивыми и наивными,
                            и вымерли в конце семнадцатого века с приходом колонизаторов.
                        </span>
                        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/4448c089783ebc407a3e.svg" alt="aboutnews" />
                        <span className='content-item-two'>Жаль, что маврикийские дронты не дожили до сегодняшнего дня.
                            Мы уверены: сейчас доверие, отзывчивость и открытость — серьёзные
                            конкурентные преимущества. Именно благодаря открытости и доверию,
                            мы смогли за семь лет стать самой крупной сетью пиццерий в России.
                            Звучит как парадокс, но мы видим в этом закономерность.
                        </span>
                        <span className='content-item-three'>
                            Мы хотим жить и работать в мире, где люди доверяют друг другу.
                            Мы создаём такой мир, делая очень простой и приземлённый продукт: пиццу.
                            Это лишь способ жить так, как мы хотим!
                        </span>
                    </div>
                </div>
            </TabPanel>
            <AppBar position="static">
                <div className='tabs-one' >
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="1" {...a11yProps(0)} />
                        <Tab label="2" {...a11yProps(1)} />
                        <Tab label="3" {...a11yProps(2)} />
                        <Tab label="4" {...a11yProps(3)} />
                    </Tabs>
                </div>
            </AppBar>
        </div>
    );
}
