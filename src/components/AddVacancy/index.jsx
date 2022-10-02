import React from 'react';
import './AddVacancy.css'

const AddVacancy = ({setNameOfVacancy, setRequirements, setNameOfCompany,onClickAddVacancy,isAllDataAdded}) => {
    return (
        <div className={'addVacancyWrapper'}>
            <div className="addVacancy">
                <div className="dataOfVacancy">
                    <input type="text" onChange={event => {setNameOfVacancy(event.target.value)}} placeholder={'Название вакансии'}/>
                    <input type="text" onChange={event => {setRequirements(event.target.value)}} placeholder={'Требования'}/>
                    <input type="text" onChange={event => {setNameOfCompany(event.target.value)}} placeholder={'Название компании'}/>
                </div>
                <div style={{color:'red', display:isAllDataAdded}  }>вы ввели не все данные</div>
                <button onClick={() => onClickAddVacancy()}>
                    отправить вакансию
                </button>
            </div>
        </div>
    );
};

export default AddVacancy;
