import React from 'react';
import './Companies.css'
const Companies = ({vacancyList}) => {
    return (
        <div className={'companiesWrapper'}>
            <div className="companies">
                <div className={'temporaryInfo'}>

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
                            {company.rating !== 0 ? <div> средняя оценка компании: {company.rating} </div> : <div>у этой компании еще не отзывов :(</div>  }

                        </div>
                    </div>

                </div>
                )}
            </div>
        </div>
    );
};

export default Companies;
