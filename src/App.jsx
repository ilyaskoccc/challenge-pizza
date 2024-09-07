import Anasayfa from "../components/Anasayfa";
import SiparisBasarili from "../components/SiparisBasarili";
import SiparisOlustur from "../components/SiparisOlustur";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SiparisBasarili.css";
// import './App.css' yazasark tüm css inline ortadan kalkar.

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footter from "../components/Footter";

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
          <Route path="/siparis-basarili">
            <SiparisBasarili />
          </Route>
        </Switch>
      </div>
      <Footter />
    </Router>
  );
}

export default App;
