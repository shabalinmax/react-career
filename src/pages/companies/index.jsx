import React from 'react';
import './Companies.css'
const Companies = ({vacancyList}) => {
    return (
        <div className={'companiesWrapper'}>
            <div className="companies">
                <div className={'temporaryInfo'}>
                    <p>В этом разделе вы можете ознакомиться с компаниями, которые разместили вакансии на нашем сайте</p>
                    <p>ВАЖНО!</p>
                    <p>если вы работали или работаете в одной из компаний, пожалуйста, оставьте свою оценку</p>
                    <p>помогите соискателям с выбором </p>
                </div>
                {vacancyList.map(company =>
                <div
                    className={'companyWrapper'}
                    key={company.id}>
                    <div className="company">
                        <div className="companyName">
                            {company.companyName}
                        </div>
                        <div className="companyRating">
                            {company.rating}
                        </div>
                    </div>

                </div>
                )}
            </div>
        </div>
    );
};

export default Companies;
