import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddBeverages = () => {
    const [beverages, setBeverages] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createBeverages } = useContext(adminContext)

    function handleInputs(e) {
        let newBeverages = {
            ...beverages,
            [e.target.name]: e.target.value
        }
        setBeverages(newBeverages)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={beverages.title}
                    id="standard-basic"
                    label="Название напитки"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={beverages.price}
                    type='number'
                    id="standard-basic"
                    label="Цена напитки"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={beverages.description}
                    id="standard-basic"
                    label="Описание напитки"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={beverages.photo}
                    id="standard-basic"
                    label="фото напитки"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!beverages.title.trim()
                            || !beverages.description.trim()
                            || !beverages.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createBeverages({
                            title: beverages.title.trim(),
                            price: beverages.price.trim(),
                            description: beverages.description.trim(),
                            photo: beverages.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddBeverages;