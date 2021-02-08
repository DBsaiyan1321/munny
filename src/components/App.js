import React from "react"; 
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import HomePageContainer from "./Home/HomePageContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePageContainer} />
      {/* <Route exact path="/calculator" component={CalculatorContainer} /> */}
      <Route path="*" component={HomePageContainer} />
    </Switch>
  );
}

export default App;
