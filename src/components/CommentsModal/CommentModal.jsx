import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@material-ui/core';
import Modal from '@mui/material/Modal';
import { adminContext } from '../../contexts/AdminContext';
import { useHistory } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4,
};

export default function CommentModal() {
    const { createComment, comment, getComm } = React.useContext(adminContext)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const history = useHistory()
    const handleClose = () => setOpen(false);
    const [commetn, setComment] = React.useState({
        comm: '',
        user: ''
    });

    console.log(comment);
    function handleInput(e) {
        let newComm = {
            ...commetn,
            [e.target.name]: e.target.value
        }
        setComment(newComm)
    }
    return (
        <div>
            <Button onClick={handleOpen}>Комментс</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h2>Комментарии пользователей </h2>
                    </div>
                    <div>
                        <form className='formControl'>
                            <TextField
                                value={commetn.comm}
                                id="standard-basic"
                                label="Напишите комментарии"
                                onChange={handleInput}
                                name='comm'
                            />
                            <TextField
                                value={commetn.user}
                                id="standard-basic"
                                label="Напишите имя"
                                onChange={handleInput}
                                name='user'
                            />
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (!commetn.comm.trim()) {
                                        alert('Заполните все поля!')
                                        return
                                    }
                                    createComment({
                                        title: commetn.comm.trim(),
                                        user: commetn.user.trim()
                                    })
                                    history.push('/comm')
                                }}>
                                Написать комментарии
                            </Button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
