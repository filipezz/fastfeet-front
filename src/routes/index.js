import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Encomendas from '../pages/Encomendas';
import Entregadores from '../pages/Entregadores';
import Problemas from '../pages/Problemas';
import Destinatários from '../pages/Destinatários';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/encomendas" component={Encomendas} isPrivate />
      <Route path="/entregadores" component={Entregadores} isPrivate />
      <Route path="/destinatarios" component={Destinatários} isPrivate />
      <Route path="/problemas" component={Problemas} isPrivate />
    </Switch>
  );
}
