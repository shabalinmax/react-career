import React from 'react';
import './SectionMenu.css'
import {Link} from "react-router-dom";

const SectionMenu = ({vacancyList}) => {
    return (
        <div className={'sectionMenuWrapper'}>
            <div className="sectionMenu">
                <div className="sectionMenuCategory">
                    <Link to = '/'>
                        <span>Вакансии</span>
                    </Link>
                    <Link to = '/companies'>
                        <span>Компании</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Рейтинг</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Образование</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Журнал</span>
                    </Link>
                </div>
                <div className="sectionMenuAccount">

                    <Link to={'/favorite'} title={'показать избранные вакансии'}>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z" fill="#14181F" stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link to={'/addVacancy'} title={'Добавить вакансию'} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6C16 4.34315 14.6569 3 13 3H11C9.34315 3 8 4.34315 8 6M10 14H14M12 12V16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#131A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;
