import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "./app/store";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
const store = configureStore();
ReactDOM.render(

    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiPickersUtilsProvider>
,
  document.getElementById("root")
);
