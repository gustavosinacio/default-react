import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>home</h1>} />
      <Route path="/dashboard" component={() => <div>dashboard</div>} />
    </Switch>
  );
}
