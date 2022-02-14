// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import Portfolio from "./components/Portfolio/Portfolio";
import EmailFooter from "./components/FooterEmail";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" exact={true}>
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
      <EmailFooter />
    </BrowserRouter>
  );
}

export default App;
