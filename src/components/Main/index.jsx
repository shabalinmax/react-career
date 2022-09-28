import React from 'react';
import './Main.css'
import Filter from "../Filter";
import Vacancy from "../Vacancy";
const Main = ({vacancyList}) => {
    const [searchValue, setSearchValue] = React.useState('')
    return (

        <div  className={'MainWrapper'}>
            <div  className={'main'}>
                <Filter
                    countOfVacancy = {vacancyList.length}
                    setSearchValue = {setSearchValue}
                />
                {
                    vacancyList
                        .filter((el) => el.jobName.toLowerCase().includes(searchValue.toLowerCase())) // фильтр по значению поиска поиску
                        .map((el) =>
                        <Vacancy
                            key = {el.id}
                            job = {el}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Main;
