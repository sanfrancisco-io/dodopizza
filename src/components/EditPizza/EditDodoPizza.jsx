import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditDodoPizza = () => {
    const { getPizzaToEdit, saveEditedPizza, pizzaToEdit } = useContext(adminContext)
    const [editPizza, setEditPizza] = useState(pizzaToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditPizza(pizzaToEdit)
    }, [pizzaToEdit])

    useEffect(() => {
        getPizzaToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editPizza,
            [e.target.name]: e.target.value
        }
        setEditPizza(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editPizza ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editPizza.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editPizza.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editPizza.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editPizza.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editPizza.title.trim()
                                            || !editPizza.description.trim()
                                            || !editPizza.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedPizza(editPizza)
                                        history.push('/admin')
                                    }}
                                >
                                    Редактировать
                                </Button>
                            </form>
                        </div>
                    ) :
                    (
                        <h2>Loading</h2>
                    )
            }
        </div>
    );
};

export default EditDodoPizza;