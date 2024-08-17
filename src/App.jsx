import Anasayfa from '../components/Anasayfa';
import SiparisOlustur from '../components/SiparisOlustur';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/siparis-olustur">
            <SiparisOlustur />
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App
