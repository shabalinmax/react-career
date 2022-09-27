import './App.css';
import Header from "./components/Header";
import SectionMenu from "./components/SectionMenu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route, Outlet, Link } from "react-router-dom";
import Developing from "./pages/Developing";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
        <Header/>
        <SectionMenu/>
        <Routes>
            <Route path='/' element =
                {<Main/>}>
            </Route>
            <Route path='/developing' element =
                {<Developing/>}>
            </Route>
            <Route path='*' element =
                {<Error/>}>
            </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
