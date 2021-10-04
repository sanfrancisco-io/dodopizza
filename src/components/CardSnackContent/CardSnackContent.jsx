import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CardSnacks from '../CardSnack/CardSnack';


const CardPizzaContent = () => {
    const { getSnacks, snacks, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getSnacks()
    }, [])
    return (
        <>
            {
                snacks ? (
                    <>
                        {
                            snacks.map(item => (
                                <CardSnacks item={item} key={item.id} />
                            ))
                        }
                    </>
                ) :
                    (
                        <h2>Loading...</h2>
                    )
            }
        </>
    );
};

export default CardPizzaContent;