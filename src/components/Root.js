import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

// const Root = ({ store }) => {
const Root = props => { 
    return (
        // <Provider store={store}>
        // <Provider>
            <HashRouter>
                <App />
            </HashRouter>
        // </Provider>
    );
}

export default Root;