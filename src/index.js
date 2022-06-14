import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {CategoryProvider} from "./contexts/category-context"
import {QuizProvider} from "./contexts/quiz-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <CategoryProvider>
        <QuizProvider>
          <App/>
        </QuizProvider>
      </CategoryProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
