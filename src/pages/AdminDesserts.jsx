import React from 'react';
import AddDesserts from '../components/AddDesserts/AddDesserts';
import OutDessertsTable from '../components/OutDessertsTable/OutDessertsTable';

const AdminDesserts = () => {
    return (
        <div className='adminpage'>
            <AddDesserts />
            <OutDessertsTable />
        </div>
    );
};

export default AdminDesserts;