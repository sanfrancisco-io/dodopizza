import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import MediaCard from '../Card/Card';


const CardPizzaContent = () => {
    const { getPizzas, pizzas, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getPizzas()
    }, [])
    return (
        <>
            {pizzas ? (
                <>
                    {
                        pizzas.map(item => (
                            <MediaCard item={item} key={item.id} />
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