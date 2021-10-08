import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditDesserts = () => {
    const { getDessertsToEdit, saveEditedDesserts, dessertToEdit } = useContext(adminContext)
    const [editDesserts, setEditDesserts] = useState(dessertToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditDesserts(dessertToEdit)
    }, [dessertToEdit])

    useEffect(() => {
        getDessertsToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editDesserts,
            [e.target.name]: e.target.value
        }
        setEditDesserts(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editDesserts ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editDesserts.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editDesserts.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editDesserts.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editDesserts.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editDesserts.title.trim()
                                            || !editDesserts.description.trim()
                                            || !editDesserts.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedDesserts(editDesserts)
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

export default EditDesserts;