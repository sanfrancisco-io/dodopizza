import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CardBeverage from '../CardBeverage/CardBeverage';


const CardBeverageContent = () => {
    const { getBeverages, beverages, currentPosts } = useContext(clientContext)
    // console.log(currentPosts);
    useEffect(() => {
        getBeverages()
    }, [])
    return (
        <>
            {beverages ? (
                <>
                    {
                        beverages.map(item => (
                            <CardBeverage item={item} key={item.id} />
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

export default CardBeverageContent;