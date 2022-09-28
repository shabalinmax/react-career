import React from 'react';
import './Filter.css'
const Filter = ({setSearchValue, countOfVacancy}) => {
    return (
        <div className={'FilterWrapper'}>
            <div className="filterContent">
                <h2>Работа и вакансии</h2>
                <div className="searchBlock">
                    <input placeholder={'Поиск'} type="text" onChange={event => setSearchValue(event.target.value)} />
                </div>
                <div className="countOfVacancy">
                    Сейчас доступно {countOfVacancy} вакансий
                </div>
            </div>
        </div>
    );
};

export default Filter;
