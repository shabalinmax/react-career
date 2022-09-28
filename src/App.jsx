import './App.css';
import Header from "./components/Header";
import SectionMenu from "./components/SectionMenu";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route, Link } from "react-router-dom";
import Developing from "./pages/Developing";
import Error from "./pages/Error";
import React from "react";
import Favorite from "./pages/Favorite";

function App() {
    const vacancyList = [
        {
            id: 0,
            companyName: 'ГК "АСТРА"',
            jobName: 'Ведущий разработчик (Front-end)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/221/6/logo/medium_9b118dcbc49820342b0f7e2b4a87f904.png',
            rating: 4.74,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
            ],
            isFavorite: false,
            dateOfPublication: '22 сентября',
        },
        {
            id: 1,
            companyName: 'IRLIX',
            jobName: 'Middle/ Middle+ Frontend developer (react)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/018/3/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png',
            rating: 4.42,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 2,
            companyName: 'Prodamus',
            jobName: 'Senior Frontеnd developer (React)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/177/1/logo/medium_5089eaf196d97e8b1d71da30724edb96.png',
            rating: 4,
            skills: [
                {
                    id: 0,
                    name: 'Redux',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 3,
            companyName: 'IRLIX',
            jobName: 'Middle/ Middle+ Frontend developer (react)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/018/3/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png',
            rating: 4.42,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
                {
                    id: 4,
                    name: 'Webpack',
                },
                {
                    id: 5,
                    name: 'TypeScript',
                },
            ],
            isFavorite: false,
            dateOfPublication: '30 сентября',
        },
        {
            id: 4,
            companyName: 'ГК "АСТРА"',
            jobName: 'Ведущий разработчик (Front-end)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/221/6/logo/medium_9b118dcbc49820342b0f7e2b4a87f904.png',
            rating: 4.74,
            skills: [
                {
                    id: 0,
                    name: 'Фронтенд разработчик',
                },
                {
                    id: 1,
                    name: 'HTML',
                },
                {
                    id: 2,
                    name: 'JavaScript',
                },
                {
                    id: 3,
                    name: 'React',
                },
            ],
            isFavorite: false,
            dateOfPublication: '22 сентября',
        },
    ]

    return (
    <div className="App">
        <Header/>
        <SectionMenu
            vacancyList = {vacancyList}
        />
        <Routes>
            <Route path='/' element =
                {<Main vacancyList = {vacancyList}/>}>
            </Route>

            <Route path='/developing' element =
                {<Developing/>}>
            </Route>
            <Route
                path={'/favorite'}
                element = {<Favorite vacancyList = {vacancyList}
                />}>
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
