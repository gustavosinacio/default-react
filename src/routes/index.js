import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>home</h1>} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
