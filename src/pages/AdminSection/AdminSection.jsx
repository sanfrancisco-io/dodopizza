import { Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Infobar from '../../components/InfoBar/Infobar';
import Navbar from '../../components/Navbar/Navbar';

const AdminSection = () => {
    return (
        <div>
            <Container>
                <Infobar />
                <Navbar />
                <div className='adminsection'>
                    <h2 className='main-text'>Добавить товар в базу данных</h2>
                    <Link to='/admin/pizza'>
                        <Button variant="contained" color="success">
                            Добавить Пиццу
                        </Button>
                    </Link>
                    <Link to='/admin/combo'>
                        <Button variant="contained" color="success">
                            Добавить Комбо
                        </Button>
                    </Link>
                    <Link to='/admin/snacks'>
                        <Button variant="contained" color="success">
                            Добавить Закуски
                        </Button>
                    </Link>
                    <Link to='/admin/desserts'>
                        <Button variant="contained" color="success">
                            Добавить Десерты
                        </Button>
                    </Link>
                    <Link to='/admin/beverage'>
                        <Button variant="contained" color="success">
                            Добавить Напитки
                        </Button>
                    </Link>
                    <Link to='/admin/othergood'>
                        <Button variant="contained" color="success">
                            Другие товары
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default AdminSection;