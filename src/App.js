import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Contractor from "./Contractor.jsx";
import Painters from "./Painters.jsx";
import Electrician from "./Electrician.jsx";
import Carpenter from "./Carpenter.jsx";
import Plumber from "./Plumber.jsx";
import Bricks from "./Bricks.jsx";
import Sand from "./Sand.jsx";
import Welder from "./Welder.jsx";
import Flooring from "./Flooring.jsx";
function App() {  
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/service" component={Service} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/contractor" component={Contractor} exact />
        <Route path="/painters" component={Painters} exact />
        <Route path="/electrician" component={Electrician} exact />
        <Route path="/carpenter" component={Carpenter} exact />
        <Route path="/plumber" component={Plumber} exact />
        <Route path="/bricks" component={Bricks} exact />
        <Route path="/sand" component={Sand} exact />
        <Route path="/welder" component={Welder} exact />
        <Route path="/flooring" component={Flooring} exact />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
