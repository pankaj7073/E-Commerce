import "./App.css";
import {BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Webfont from "webfontloader";
import React from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";

function App() {
  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" Component={Home}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
