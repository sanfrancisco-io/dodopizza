import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { clientContext } from '../../contexts/ClientContext';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        marginTop: '20px'
    },
    totalPriceStyles: {
        color: "black !important",
        fontWeight: "bold !important",
        fontSize: "16px !important"
    },
    displayStyles: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        bottom: '20px'

    }
});


export default function CartTable() {
    const classes = useStyles();
    const history = useHistory()
    const { getCart, cart, changeCountPizzas } = useContext(clientContext)
    console.log(cart);
    useEffect(() => {
        getCart()
    }, [])

    function handleChange(id, count) {
        if (count < 1) {
            return
        }
        changeCountPizzas(count, id)
    }

    console.log(cart);
    return (
        <>
            <div className='header-cart'>
                <h2>Корзина</h2>
                <Link to='/'>
                    <button>Вернуться в меню</button>
                </Link>
            </div>
            {
                cart ? (
                    <div className='table-section'>
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="caption table">
                                <caption className={classes.totalPriceStyles}>Итоговая сумма : {cart.totalPrice}
                                    <div className={classes.displayStyles}>
                                        <Link to='/'>
                                            <Button variant="contained" color="primary">Оформить заказ</Button>
                                        </Link>
                                    </div>
                                </caption>

                                <TableHead>
                                    <TableRow>
                                        <TableCell>№</TableCell>
                                        <TableCell align="left">Название товара</TableCell>
                                        <TableCell align="left">Описание</TableCell>
                                        <TableCell align="left">Цена  </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cart.pizzas.map((row, index) => (
                                            <TableRow key={row.pizza.id}>
                                                <TableCell component="th" scope="row">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell align="left">{row.pizza.title}</TableCell>
                                                <TableCell align="left">{row.pizza.description}</TableCell>
                                                <TableCell align="left">{row.alteredSubPrice}</TableCell>
                                            </TableRow>
                                        ))}
                                    {/* {
                                        cart.combos.map((row, index) => (
                                            <TableRow key={row.combo.id}>
                                                <TableCell component="th" scope="row">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell align="left">{row.pizza.title}</TableCell>
                                                <TableCell align="left">{row.pizza.description}</TableCell>
                                                <TableCell align="left">{row.price}</TableCell>
                                            </TableRow>
                                        ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                ) : (
                    <>
                        <h2>Корзина пуста</h2>
                        <img src="https://pizza-react-shopp.herokuapp.com/static/media/empty-cart.db905d1f.png" alt="cart" />
                        <button onClick={() => history.push('/')}>Вернуться назад</button>
                    </>
                )
            }
        </>
    );
}
