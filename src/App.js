import React from "react";
import "./assets/style/main.scss";

import {Route, BrowserRouter, Switch} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
