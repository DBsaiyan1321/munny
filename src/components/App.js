import React from "react"; 
import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./Home/HomePageContainer";
import CalculatorPageContainer from "./Calculator/CalculatorPageContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePageContainer} />
      <Route exact path="/calculator" component={CalculatorPageContainer} />
      <Route path="*" component={HomePageContainer} />
    </Switch>
  );
}

export default App;
