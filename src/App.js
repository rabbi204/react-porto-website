import {React, useState} from "react";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import About from "./components/Pages/About/About.js";
import Blog from "./components/Pages/Blog/Blog.js";
import Home from "./components/Pages/Home/Home.js";
import './App.css';
import Team from "./components/Pages/Team/Team.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/Pages/NotFound/NotFound.js";
import LoadingBar from "react-top-loading-bar";
import Shop from "./components/Pages/Shop/Shop.js";
import SingleProduct from "./components/Pages/Shop/SingleProduct/SingleProduct.js";

function App() {

    const [progress, setProgress] = useState(100);

  return (
    <>
      <BrowserRouter>
        <LoadingBar 
            color="red"
            progress={100}
            onLoaderFinished={ () => setProgress(0) }
            loaderSpeed={500}
            transitionTime={300}
            height={5}
        />
        <Header></Header>
        <Routes>
            <Route path='/' element={ <Home></Home> } />
            <Route path='/about' element={ <About></About> } />
            <Route path='/blog' element={ <Blog></Blog> } />
            <Route path='/team' element={ <Team></Team> } />
            <Route path='/shop' element={ <Shop></Shop> } />
            <Route path='/shop/:productId' element={ <SingleProduct></SingleProduct> } />
            <Route path='/*' element={ <NotFound></NotFound> } />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
