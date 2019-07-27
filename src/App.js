import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/layout/Nav'
import EditBill from './components/bills/EditBill'
import AddBill from './components/bills/AddBill'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/edit/:id' component={EditBill} />
          <Route path='/add' component={AddBill} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
