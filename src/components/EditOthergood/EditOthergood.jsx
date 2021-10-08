import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditOthergood = () => {
    const { getOtherGoodsToEdit, saveEditedOtherGoods, othergoodToEdit } = useContext(adminContext)
    const [editOthergood, setEditOthergood] = useState(othergoodToEdit)
    const { id } = useParams()

    useEffect(() => {
        setEditOthergood(othergoodToEdit)
    }, [othergoodToEdit])

    useEffect(() => {
        getOtherGoodsToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editOthergood,
            [e.target.name]: e.target.value
        }
        setEditOthergood(obj)
    }
    const history = useHistory()
    return (
        <div>
            {
                editOthergood ?
                    (
                        <div className="add_inputs">
                            <form>
                                <input
                                    value={editOthergood.title}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='title'
                                />
                                <input
                                    value={editOthergood.price}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='price'
                                />
                                <input
                                    value={editOthergood.description}
                                    id="standard-basic"
                                    onChange={handleInputs}
                                    name='description'
                                />
                                <input
                                    value={editOthergood.photo}
                                    id="standard-basic"
                                    name="photo"
                                    onChange={handleInputs} />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (!editOthergood.title.trim()
                                            || !editOthergood.description.trim()
                                            || !editOthergood.photo.trim()) {
                                            alert('Заполните все поля!')
                                            return
                                        }
                                        saveEditedOtherGoods(editOthergood)
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

export default EditOthergood;