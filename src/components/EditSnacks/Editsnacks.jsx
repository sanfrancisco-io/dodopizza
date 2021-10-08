import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditSnacks = () => {
    const { getSnacksToEdit, saveEditedSnacks, snackToEdit } = useContext(adminContext)
    const [editSnacks, setEditSnacks] = useState(snackToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditSnacks(snackToEdit)
    }, [snackToEdit])

    useEffect(() => {
        getSnacksToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editSnacks,
            [e.target.name]: e.target.value
        }
        setEditSnacks(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editSnacks ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editSnacks.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editSnacks.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editSnacks.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editSnacks.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editSnacks.title.trim()
                                            || !editSnacks.description.trim()
                                            || !editSnacks.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedSnacks(editSnacks)
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

export default EditSnacks;