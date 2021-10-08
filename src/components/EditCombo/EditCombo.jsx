import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditCombo = () => {
    const { getComboToEdit, saveEditedCombo, comboToEdit } = useContext(adminContext)
    const [editCombo, setEditCombo] = useState(comboToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditCombo(comboToEdit)
    }, [comboToEdit])

    useEffect(() => {
        getComboToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editCombo,
            [e.target.name]: e.target.value
        }
        setEditCombo(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editCombo ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editCombo.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editCombo.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editCombo.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editCombo.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editCombo.title.trim()
                                            || !editCombo.description.trim()
                                            || !editCombo.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedCombo(editCombo)
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

export default EditCombo;