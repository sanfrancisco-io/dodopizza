import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddDesserts = () => {
    const [desserts, setDesserts] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createDesserts } = useContext(adminContext)

    function handleInputs(e) {
        let newDesserts = {
            ...desserts,
            [e.target.name]: e.target.value
        }
        setDesserts(newDesserts)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={desserts.title}
                    id="standard-basic"
                    label="Название десерта"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={desserts.price}
                    type='number'
                    id="standard-basic"
                    label="Цена десерта"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={desserts.description}
                    id="standard-basic"
                    label="Описание десерта"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={desserts.photo}
                    id="standard-basic"
                    label="фото десерта"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!desserts.title.trim()
                            || !desserts.description.trim()
                            || !desserts.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createDesserts({
                            title: desserts.title.trim(),
                            price: desserts.price.trim(),
                            description: desserts.description.trim(),
                            photo: desserts.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddDesserts;