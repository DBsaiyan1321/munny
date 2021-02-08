import React from "react"; 
import { Switch, Route } from "react-router-dom";
// import HomePageContainer from "./Home/HomePageContainer";
import HomePage from "./Home/HomePage";

// const App = ({store}) => {
const App = props => {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomePageContainer} /> */}
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
