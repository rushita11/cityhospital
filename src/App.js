// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './container/Home';
import Appointment from './container/Appointment';
import Doctor from './container/Doctor';
import Department from './container/Department';
import Contact from './container/Contact';
import About from './container/About';
import Signup from "./container/auth/Signup";
import Login from "./container/auth/Login";
import Forgetpass from "./container/auth/Forgetpass";
function App() {
  return (
    < >
      <Header />
     
      <Switch>
        {/* <Forgetpass /> */}
        <Route exact path={"/forgetpass"} component={Forgetpass}/>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/doctor"} component={Doctor}/>
        <Route exact path={"/contact"} component={Contact}/>
        <Route exact path={"/department"} component={Department}/>
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/login"} component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
