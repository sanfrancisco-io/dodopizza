import React from 'react';
import OutSnacksTable from '../components/OutSnacksTable/OutSnacksTable';
import AddSnacks from '../components/AddSnacks/AddSnacks';

const AdminSnacks = () => {
    return (
        <div className='adminpage'>
            <AddSnacks />
            <OutSnacksTable />
        </div>
    );
};

export default AdminSnacks;