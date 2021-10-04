import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddSnacks = () => {
    const [snacks, setSnacks] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createSnacks } = useContext(adminContext)

    function handleInputs(e) {
        let newSnacks = {
            ...snacks,
            [e.target.name]: e.target.value
        }
        setSnacks(newSnacks)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={snacks.title}
                    id="standard-basic"
                    label="Название закуски"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={snacks.price}
                    type='number'
                    id="standard-basic"
                    label="Цена закуски"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={snacks.description}
                    id="standard-basic"
                    label="Описание закуски"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={snacks.photo}
                    id="standard-basic"
                    label="фото закуски"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!snacks.title.trim()
                            || !snacks.description.trim()
                            || !snacks.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createSnacks({
                            title: snacks.title.trim(),
                            price: snacks.price.trim(),
                            description: snacks.description.trim(),
                            photo: snacks.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddSnacks;