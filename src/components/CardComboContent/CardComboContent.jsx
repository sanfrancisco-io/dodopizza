import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CardCombo from '../CardCombo/CardCombo';
import CircularProgress from '@mui/material/CircularProgress';

const CardComboContent = () => {
    const { getCombos, combos, currentPosts } = useContext(clientContext)
    console.log(currentPosts);
    // console.log(combos);
    console.log(combos);
    useEffect(() => {
        getCombos()
    }, [])
    return (
        <>
            {
                combos ? (
                    <>
                        {
                            combos.map(item => (
                                <CardCombo item={item} key={item.id} />
                            ))
                        }
                    </>
                ) :
                    (
                        <h2>Loading <CircularProgress /></h2>
                    )
            }
        </>
    );
};

export default CardComboContent;