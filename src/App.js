import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Nav from './components/layout/Nav'
import EditBill from './components/bills/EditBill'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/edit/:id' component={EditBill} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
