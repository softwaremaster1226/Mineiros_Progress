import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import LandingZonePage from "./Pages/LandingZone";
import TerraformPage from "./Pages/Terraform-library";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog " component={LandingZonePage} />
          <Route exact path="/contact" component={TerraformPage} />
          <Redirect from="/" to="/home" exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
