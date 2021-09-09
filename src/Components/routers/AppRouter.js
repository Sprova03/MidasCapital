import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { CursosScreen } from "./CursosScreen";
import { AboutScreen } from "./AboutScreen";
import { InicioScreen } from "./InicioScreen";
import { ContactScreen } from "./ContactScreen";
// import { Comp404Screen } from "../comp404/Comp404Screen";

import ScrollToTop from "./ScrollToTop";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Switch>
          {/* <Route exact  path="/" component={ InicioScreen }/> */}
          <Route exact path="/" component={InicioScreen} />
          {/* <Route exact path="/cursos" component={CursosScreen} /> */}
          <Route exact path="/nosotros" component={AboutScreen} />
          <Route exact path="/contacto" component={ContactScreen} />
          {/* <Route component={Comp404Screen} /> */}
        </Switch>
      </div>
    </Router>
  );
};
