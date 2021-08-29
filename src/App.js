import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import LandingZonePage from "./Pages/LandingZone";
import TerraformPage from "./Pages/Terraform-library";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/landingzone" component={LandingZonePage} />
          <Route exact path="/terraform" component={TerraformPage} />
          <Redirect from="/" to="/home" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
