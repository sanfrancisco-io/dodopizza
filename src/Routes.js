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
import EditCombo from './components/EditCombo/EditCombo';
import EditBeverage from './components/EditBeverage/EditBeverage';
import EditSnacks from './components/EditSnacks/Editsnacks';
import EditDesserts from './components/EditDesserts/EditDesserts';
import EditOthergood from './components/EditOthergood/EditOthergood';
import CartTable from './components/CartTable/CartTable';
import AuthContextProvider from './contexts/AuthContext';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';



const Routes = () => {
    return (
        <AuthContextProvider>
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
                            <Route exact path="/edit/pizza/:id" component={EditDodoPizza} />
                            <Route exact path="/edit/combo/:id" component={EditCombo} />
                            <Route exact path="/edit/beverage/:id" component={EditBeverage} />
                            <Route exact path="/edit/snacks/:id" component={EditSnacks} />
                            <Route exact path="/edit/desserts/:id" component={EditDesserts} />
                            <Route exact path="/edit/othergood/:id" component={EditOthergood} />
                            <Route exact path='/bonus' component={BonusPage} />
                            <Route exact path='/cart' component={CartTable} />
                            <Route exact path='/favorite' component={FavoritePage} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={Signup} />
                        </Switch>
                    </BrowserRouter>
                </AdminContextProvider>
            </ClientContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;