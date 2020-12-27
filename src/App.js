import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { createBrowserHistory } from "history";
import Main from "./Features/Layouts/MainLayout/index";
import ScrollReset from "Features/Components/ScrollReset";
import "./app/mock";

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Main>
        <ScrollReset />
        <Routes />
      </Main>
    </BrowserRouter>
  );
}

export default App;