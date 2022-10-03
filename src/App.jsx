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
import AddVacancy from "./pages/AddVacancy";
import Vacancy from "./components/Vacancy";
import Companies from "./pages/companies";

function App() {
    const [vacancyList, setVacancyList] = React.useState([ {
        id: 0,
        companyName: 'ГК "АСТРА"',
        jobName: 'Ведущий разработчик (Front-end)',
        logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/221/6/logo/medium_9b118dcbc49820342b0f7e2b4a87f904.png',
        rating: 4.74,
        skills: 'HTML, JavaScript, React',
        isFavorite: false,
        dateOfPublication: '02 oct 2022',
    },
        {
            id: 1,
            companyName: 'IRLIX',
            jobName: 'Middle/ Middle+ Frontend developer (react)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/018/3/logo/medium_ca7bfaa26d0e35a743ed5b8a9d0c8a12.png',
            rating: 4.42,
            skills: 'Фронтенд разработчик, HTML, JavaScript, React, Webpack, TypeScript',
            isFavorite: false,
            dateOfPublication: '02 oct 2022',
        },
        {
            id: 2,
            companyName: 'Prodamus',
            jobName: 'Senior Frontеnd developer (React)',
            logoUrl: 'https://hsto.org/getpro/moikrug/uploads/company/100/007/177/1/logo/medium_5089eaf196d97e8b1d71da30724edb96.png',
            rating: 4,
            skills: 'HTML, Redux, JavaScript, React, Webpack',
            isFavorite: false,
            dateOfPublication: '02 oct 2022',
        },])

    const [nameOfVacancy, setNameOfVacancy] = React.useState('')
    const [requirements, setRequirements] = React.useState('')
    const [nameOfCompany, setNameOfCompany] = React.useState('')
    const [isAllDataAdded, setIsAllDataAdded] = React.useState('none')
    const onClickAddVacancy = () => {
        if (nameOfVacancy.trim().length>0&&requirements.trim().length>0&&nameOfCompany.trim().length>0) {
            setVacancyList([...vacancyList,     {
                id: vacancyList.length,
                companyName: nameOfCompany,
                jobName: nameOfVacancy,
                skills: requirements,
                isFavorite: false,
                rating: '',
                dateOfPublication: ((d,x,y)=>`${x(d.getDate())} ${y(d.getMonth())} ${d.getFullYear()}`)
                (
                    new Date(),
                    (x)=>x.toString().padStart(2,"0"),
                    (m)=>"jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec".split(',')[m]
                ),
            }])
            setNameOfVacancy('')
            setRequirements('')
            setNameOfCompany('')
            setIsAllDataAdded('none')
        }
        else {
            setIsAllDataAdded('block')
        }
    }
    React.useEffect(() => {

    },[nameOfVacancy,requirements,nameOfCompany])
    return (
    <div
        className="App">
        <Header/>
        <SectionMenu
            vacancyList = {vacancyList}
        />
        <Routes>
            <Route path='/' element =
                {<Main vacancyList = {vacancyList}  />}>
            </Route>

            <Route path='/developing' element =
                {<Developing/>}>
            </Route>
            <Route path='/companies' element =
                {<Companies
                    vacancyList = {vacancyList}
                />}>
            </Route>
            <Route
                path={'/favorite'}
                element = {<Favorite vacancyList = {vacancyList}
                />}>
            </Route>
            <Route
                path={'/addVacancy'}
                element = {<AddVacancy
                    isAllDataAdded={isAllDataAdded}
                    setNameOfVacancy={setNameOfVacancy}
                    setRequirements={setRequirements}
                    setNameOfCompany={setNameOfCompany}
                    onClickAddVacancy={onClickAddVacancy}/>}>
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
