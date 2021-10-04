import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddOtherGoods = () => {
    const [othergood, setOtherGood] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createOtherGoods } = useContext(adminContext)

    function handleInputs(e) {
        let newOtherGood = {
            ...othergood,
            [e.target.name]: e.target.value
        }
        setOtherGood(newOtherGood)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={othergood.title}
                    id="standard-basic"
                    label="Название продукта"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={othergood.price}
                    type='number'
                    id="standard-basic"
                    label="Цена продукта"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={othergood.description}
                    id="standard-basic"
                    label="Описание продукта"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={othergood.photo}
                    id="standard-basic"
                    label="фото продукта"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!othergood.title.trim()
                            || !othergood.description.trim()
                            || !othergood.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createOtherGoods({
                            title: othergood.title.trim(),
                            price: othergood.price.trim(),
                            description: othergood.description.trim(),
                            photo: othergood.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddOtherGoods;