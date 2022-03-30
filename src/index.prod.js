import React from "react"
import ReactDOM from "react-dom";
import {App} from "./Copmonents/App/App";
import MainRoutes from "./Copmonents/Routes";



ReactDOM.hydrate(<>
    <MainRoutes/>
  </>,
  document.getElementById('app'))