import React from 'react';
import AddBeverages from '../components/AddBeverages/AddBeverages';
import OutBeverageTable from '../components/OutBeverageTable/OutBeverageTable';

const AdminBeverage = () => {
    return (
        <div className='adminpage'>
            <AddBeverages />
            <OutBeverageTable />
        </div>
    );
};

export default AdminBeverage;