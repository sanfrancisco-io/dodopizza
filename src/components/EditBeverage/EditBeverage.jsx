import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditBeverage = () => {
    const { getBeveragesToEdit, saveEditedBeverages, beverageToEdit } = useContext(adminContext)
    const [editBeverage, setEditBeverage] = useState(beverageToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditBeverage(beverageToEdit)
    }, [beverageToEdit])

    useEffect(() => {
        getBeveragesToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editBeverage,
            [e.target.name]: e.target.value
        }
        setEditBeverage(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editBeverage ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editBeverage.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editBeverage.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editBeverage.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editBeverage.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editBeverage.title.trim()
                                            || !editBeverage.description.trim()
                                            || !editBeverage.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedBeverages(editBeverage)
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

export default EditBeverage;