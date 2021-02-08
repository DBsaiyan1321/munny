import React from "react"; 
import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./Home/HomePageContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  );
}

export default App;
