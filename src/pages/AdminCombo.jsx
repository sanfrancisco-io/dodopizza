import React from 'react';
import AddCombo from '../components/AddCombo/AddCombo';
import OutCombo from '../components/OutComboTable/OutCombo';

const AdminCombo = () => {
    return (
        <div className='adminpage'>
            <AddCombo />
            <OutCombo />
        </div>
    );
};

export default AdminCombo;