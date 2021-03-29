import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:title" component={Detail} /> 
      {/* :title이라고 쓰면 title이 주소창에 들어가게 된다! */}
      {/* <Route path="/about" component={About} /> */}
    </HashRouter>
  );
}
export default App;
