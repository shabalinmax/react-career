import React from 'react';
import './Filter.css'
const Filter = ({setSearchValue}) => {
    return (
        <div className={'FilterWrapper'}>
            <div className="filterContent">
                <h2>Работа и вакансии</h2>
                <div className="searchBlock">
                    <input placeholder={'Поиск'} type="text" onChange={event => setSearchValue(event.target.value)} />
                </div>
                <div className="numberOfJob">
                    Сейчас доступно 365 вакансий
                </div>
            </div>
        </div>
    );
};

export default Filter;
