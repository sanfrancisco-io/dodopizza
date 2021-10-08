import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { clientContext } from '../../contexts/ClientContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4,
};

export default function BasicModal({ item }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { addAndDeletePizzaInCart } = React.useContext(clientContext)
    const [price, setPrice] = React.useState(item.price)
    const [jalapeno] = React.useState({ price: 29, id: 1 })
    const [mozzarella] = React.useState({ price: 60, id: 2 })
    const [cheeseSide] = React.useState({ price: 140, id: 3 })
    let [prices, setPrices] = React.useState([])
    function handleClick(item) {
        let check = prices.filter(elem => item.id === elem.id)

        if (check.length) {
            setPrice(price - item.price)
            setPrices(prices.filter(elem => elem.id !== item.id))
        } else {
            setPrice(price + item.price)
            setPrices([...prices, item])
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}>Выбрать</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div key={item.id} className='modal'>
                        <div className='modal-left'>
                            <img src={item.photo} alt='pizza' />
                        </div>
                        <div className='modal-right'>
                            <p className='title-modal'>{item.title}</p>
                            <span className='descr-modal'>{item.description}</span>
                            <span>Добавить в пиццу</span>
                            <div className='button-section'>
                                <button
                                    onClick={() => handleClick(jalapeno)}
                                    className='button-products'>
                                    <img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAE08756607" alt="hot halopenya" />
                                    <p>Острый халапеньо</p>
                                    <p>29 сом</p>
                                </button>
                                <button
                                    onClick={() => handleClick(mozzarella)}
                                    className='button-products'>
                                    <img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA0840AA627496" alt="mocarello" />
                                    <p>Сыр моцарелла</p>
                                    <p>60 сом</p>
                                </button>
                                <button
                                    onClick={() => handleClick(cheeseSide)}
                                    className='button-products'>
                                    <img src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/e53174ca6bb64013921b058899050e20.png" alt="hot halopenya" />
                                    <p> Сырный бортик</p>
                                    <p>140 сом</p>
                                </button>
                            </div>
                            <div className='cart-section'>
                                <button className='cart-button'
                                    onClick={() => [addAndDeletePizzaInCart(item, price), handleClose()]}>
                                    {price}
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
