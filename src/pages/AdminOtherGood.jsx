import React from 'react';
import AddOtherGoods from '../components/AddOtherGoods/AddOtherGoods';
import OutOtherGoodTable from '../components/OutOtherGood/OutOtherGoodTable';

const AdminPizza = () => {
    return (
        <div className='adminpage'>
            <AddOtherGoods />
            <OutOtherGoodTable />
        </div>
    );
};

export default AdminPizza;