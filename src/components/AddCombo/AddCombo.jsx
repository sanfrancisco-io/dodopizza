import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddCombo = () => {
    const [combo, setCombo] = useState({
        title: '',
        price: '',
        description: '',
        photo: ''
    })

    const { createCombo } = useContext(adminContext)

    function handleInputs(e) {
        let newCombo = {
            ...combo,
            [e.target.name]: e.target.value
        }
        setCombo(newCombo)
    }
    return (
        <div>
            <form className='formControl'>
                <TextField
                    value={combo.title}
                    id="standard-basic"
                    label="Название комбо"
                    onChange={handleInputs}
                    name='title'
                />
                <TextField
                    value={combo.price}
                    type='number'
                    id="standard-basic"
                    label="Цена комбо"
                    onChange={handleInputs}
                    name='price'
                />
                <TextField
                    value={combo.description}
                    id="standard-basic"
                    label="Описание комбо"
                    onChange={handleInputs}
                    name='description'
                />
                <TextField
                    value={combo.photo}
                    id="standard-basic"
                    label="фото комбо"
                    onChange={handleInputs}
                    name='photo'
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!combo.title.trim()
                            || !combo.description.trim()
                            || !combo.photo.trim()) {
                            alert('Заполните все поля!')
                            return
                        }
                        createCombo({
                            title: combo.title.trim(),
                            price: combo.price.trim(),
                            description: combo.description.trim(),
                            photo: combo.photo.trim(),
                        })
                    }}
                >
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddCombo;