import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetials from "./components/MovieDetials/MovieDetials";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { withRouter } from 'react-router-dom';

function App() {
  // console.log(withRouter);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetials />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
