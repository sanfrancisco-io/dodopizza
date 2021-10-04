import React from 'react';
import AddDodoPizza from '../components/AddPizza/AddDodoPizza';
import OutPizzasTable from '../components/OutPizzasTable/OutPizzasTable';

const AdminPizza = () => {
    return (
        <div className='adminpage'>
            <AddDodoPizza />
            <OutPizzasTable/>
        </div>
    );
};

export default AdminPizza;