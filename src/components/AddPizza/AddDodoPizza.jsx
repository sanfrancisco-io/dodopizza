import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddDodoPizza = () => {
    const [pizzas, setPizzas] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createPizza } = useContext(adminContext)

    function handleInputs(e) {
        let newPizzas = {
            ...pizzas,
            [e.target.name]: e.target.value
        }
        setPizzas(newPizzas)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={pizzas.title}
                    id="standard-basic"
                    label="Название пиццы"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={pizzas.price}
                    type='number'
                    id="standard-basic"
                    label="Цена пиццы"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={pizzas.description}
                    id="standard-basic"
                    label="Описание пиццы"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={pizzas.photo}
                    id="standard-basic"
                    label="фото пиццы"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!pizzas.title.trim()
                            || !pizzas.description.trim()
                            || !pizzas.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createPizza({
                            title: pizzas.title.trim(),
                            price: pizzas.price.trim(),
                            description: pizzas.description.trim(),
                            photo: pizzas.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddDodoPizza;