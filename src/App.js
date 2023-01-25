// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './container/Home';
import Appointment from './container/Appointment';
// import Doctor from './container/Doctor';
import Department from './container/Department';
import Contact from './container/Contact';
import About from './container/About';
import Signup from "./container/auth/Signup";
import Login from "./container/auth/Login";
import Forgetpass from "./container/auth/Forgetpass";
import Medicin from "./container/Medicin";
import Form from "./container/Form";
import Medicins from "./admin/Container/Medicine/Medicins";
import Layout from "./admin/Component/Layout/Layout";
import Doctor from "./admin/Container/Doctor/Doctor";
function App() {
  return (
    < >
       {/* <Header /> */}
      {/* <Form /> */}

      {/* <Switch> */}
        {/* <Forgetpass /> */}
      {/* <Route exact path={"/forgetpass"} component={Forgetpass} />
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/doctor"} component={Doctor} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/department"} component={Department} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/medicin"} component={Medicin} />
      </Switch>
      <Footer />  */}
      <Layout>
        <Switch>
          <Route exact path={"/medicins"} component={Medicins} />
          <Route exact path={"/doctor"} component={Doctor} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
