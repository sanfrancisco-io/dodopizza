import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CardOthergood from '../CardOthergood/CardOthergood';


const CardOthergoodComp = () => {
    const { getOthergood, othergood, currentPosts } = useContext(clientContext)
    // console.log(currentPosts);
    useEffect(() => {
        getOthergood()
    }, [])
    return (
        <>
            {othergood ? (
                <>
                    {
                        othergood.map(item => (
                            <CardOthergood item={item} key={item.id} />
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

export default CardOthergoodComp;