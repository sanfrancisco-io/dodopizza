import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CardDessert from '../CardDessert/CardDessert';
import CircularProgress from '@mui/material/CircularProgress';


const CardDessertContent = () => {
    const { getDesserts, desserts, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getDesserts()
    }, [])
    return (
        <>
            {
                desserts ? (
                    <>
                        {
                            desserts.map(item => (
                                <CardDessert item={item} key={item.id} />
                            ))
                        }
                    </>
                ) :
                    (
                        <>
                            <h2 style={{ padding: '10px' }}>Loading</h2><CircularProgress />
                        </>
                    )
            }
        </>
    );
};

export default CardDessertContent;