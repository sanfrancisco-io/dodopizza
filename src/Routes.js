import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditDodoPizza from './components/EditPizza/EditDodoPizza';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import AdminBeverage from './pages/AdminBeverage';
import AdminCombo from './pages/AdminCombo';
import AdminDesserts from './pages/AdminDesserts';
import AdminPizza from './pages/AdminPizza';
import AdminOtherGood from './pages/AdminOtherGood';
import AdminSection from './pages/AdminSection/AdminSection';
import MainPage from './pages/MainPage/MainPage';
import AdminSnacks from './pages/AdminSnacks';
import BonusPage from './pages/BonusPage/BonusPage';



const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/admin' component={AdminSection} />
                        <Route exact path='/admin/pizza' component={AdminPizza} />
                        <Route exact path='/admin/beverage' component={AdminBeverage} />
                        <Route exact path='/admin/desserts' component={AdminDesserts} />
                        <Route exact path='/admin/othergood' component={AdminOtherGood} />
                        <Route exact path='/admin/snacks' component={AdminSnacks} />
                        <Route exact path='/admin/combo' component={AdminCombo} />
                        <Route exact path="/edit/:id" component={EditDodoPizza} />
                        <Route exact path='/bonus' component={BonusPage} />
                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;