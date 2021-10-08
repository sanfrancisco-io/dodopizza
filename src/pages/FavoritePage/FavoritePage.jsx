import React from 'react';
import FavoriteTable from '../../components/FavoriteTable/FavoriteTable';

const FavoritePage = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Rubik', fontWeight: 'normal' }}>Избранные</h2>
            <FavoriteTable />
        </div>
    );
};

export default FavoritePage;