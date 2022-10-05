import React from 'react';
import './Companies.css'
const Companies = ({vacancyList}) => {
    const [changeRatingNameCompany, setChangeRatingNameCompany] = React.useState(vacancyList[0].companyName)
    const [changeRatingValue, setChangeRatingValue] = React.useState(5)
    const [changeRating, setChangeRating] = React.useState(false)
    React.useEffect(() => {
        setChangeRating(false)
    }, [changeRating])
    const onClick = () => {
        vacancyList.filter(el => el.companyName === changeRatingNameCompany)[0].rating.push(changeRatingValue)
        setChangeRating(true)
    }
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
                            {company.rating.length !== 0 ?
                                <div>средняя оценка компании:
                                    {(company.rating.reduce((partialSum, a) => partialSum + a, 0)/company.rating.length).toFixed(2)} </div>
                                :
                                <div>у этой компании еще не отзывов :(</div> }

                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="rateCompany">
                <h1 >
                    Если вы сталкивались с работой в одной из следующих фирм, можете оставить свой балл
                </h1>
                <div className="rateSection">
                    <select onChange={event => setChangeRatingNameCompany(event.target.value)} className={'companySelect'}>
                        {vacancyList.map(el => <option key={el.id} value={el.companyName}>{el.companyName}</option>)}
                    </select>
                    <select onChange={event => setChangeRatingValue(+event.target.value)} className={'ratingSelect'}>
                        <option value={5}>
                            5
                        </option>
                        <option value={4}>
                            4
                        </option>
                        <option value={3}>
                            3
                        </option>
                        <option value={2}>
                            2
                        </option>
                        <option value={1}>
                            1
                        </option>
                    </select>
                    <button onClick={() => onClick()}>Отправить</button>
                </div>
            </div>


        </div>
    );
};

export default Companies;
