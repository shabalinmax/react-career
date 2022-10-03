import React from 'react';
import './Vacancy.css'

const Vacancy = ({job,setFavoriteListChanged}) => {
    const [isClickFavorite, setClickIsFavorite] = React.useState(false)
    const onClickFavorite = (job) => {
        job.isFavorite = !job.isFavorite
        setClickIsFavorite(true)
        if (setFavoriteListChanged !== undefined) {
            setFavoriteListChanged(true)
        }
    }
    React.useEffect(() => {
        setClickIsFavorite(false)
    }, [isClickFavorite])

    return (

        <div className='VacancyWrapper'>
            <div className="vacancyDescription">
                <div className='dateOfPublication'>{job.dateOfPublication}</div>
                <div className='companyName'>{job.companyName} <span className='rating'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11H4C3.44772 11 3 11.4477 3 12V20H9V11Z" stroke="#1ACE1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20 8H15V20H21V9C21 8.44772 20.5523 8 20 8Z" stroke="#1ACE1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 4H10C9.44772 4 9 4.44772 9 5V20H15V5C15 4.44772 14.5523 4 14 4Z" stroke="#1ACE1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> {job.rating}</span></div>
                <div className='jobName'>{job.jobName}</div>
                <div className="skills">
                    <div style={{whiteSpace: 'normal'}}>{job.skills}</div>
                </div>
            </div>
            <div className="logoAndFavorite">
                <div onClick={() => onClickFavorite(job)} className="favorite">
                    {job.isFavorite === false ? <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z" stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> : <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z" fill="#14181F" stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> }
                </div>
            </div>
        </div>
    );
};

export default Vacancy;
