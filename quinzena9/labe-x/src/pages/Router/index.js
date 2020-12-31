import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../components/Error';
import CreateTrip from '../components/CreateTrip';
import DetailsTrip from '../components/DetailsTrip';
import Login from '../components/Login';
import ManageTrips from '../components/ManageTrips';
import ApplicationForm from '../components/ApplicationForm';
import Home from '../components/Home';
import ListTrips from '../components/ListTrips';

const Router = () => {
  return (
    <BrowserRouter>
      {/*Header*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/viagens/lista">
          <ListTrips />
        </Route>

        <Route exact path="/candidatarse">
          <ApplicationForm />
        </Route>

        <Route exact path="/acessar">
          <Login />
        </Route>

        <Route exact path="/viagens/adm">
          <ManageTrips />
        </Route>

        <Route exact path="/viagem/adm/criar">
          <CreateTrip />
        </Route>

        <Route exact path="/viagem/detalhes">
          <DetailsTrip />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
