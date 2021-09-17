import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ContextProvider from "./Global/ContextProvider";
import Products from "./Global/Products";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Index from "./NewProject1/Index";
import IndexUpdated from "./ProjectUpdated/IndexUpdated";
function App() {
  return (
    // <div>
    //   {/* <Index/> */}
    // </div>
    // CONTEXT API WORK
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />

          <ContextProvider>
            <Products />
          </ContextProvider>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
