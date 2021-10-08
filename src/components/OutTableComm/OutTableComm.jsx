import React, { useEffect } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


const OutTableComm = () => {
    const { comment, getComm } = React.useContext(adminContext)
    useEffect(() => {
        getComm()
    }, [])
    return (
        <div>
            {
                comment ? (
                    <div className='table-comm'>
                        <TableContainer className='table-container' component={Paper} >
                            <Table className='main-table' aria-label="caption table">
                                <TableHead>
                                    <TableRow className='TableRow'>
                                        <TableCell className='table-item'>Имя пользователя</TableCell>
                                        <TableCell className='table-item' fontWeight="{500}" align="left">Комментарии</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        comment.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell align="left">{item.user}</TableCell>
                                                <TableCell align="left">{item.title}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )
                    :
                    (
                        <h2>Loading...</h2>
                    )
            }
        </div>
    );
};

export default OutTableComm;