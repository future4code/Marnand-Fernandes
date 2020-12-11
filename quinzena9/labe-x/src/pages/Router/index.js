import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../components/Error';
import CreateTrip from '../components/private/CreateTrip';
import DetailsTrip from '../components/private/DetailsTrip';
import Login from '../components/private/Login';
import ApplicationForm from '../components/public/ApplicationForm';
import Home from '../components/public/Home';
import ListTrips from '../components/public/ListTrips';

const Router = () => {
  return (
    <BrowserRouter>
      {/*Header*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/trips/list">
          <ListTrips />
        </Route>

        <Route exact path="/form">
          <ApplicationForm />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/trips/create">
          <CreateTrip />
        </Route>

        <Route exact path="/trips/details">
          <DetailsTrip />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
