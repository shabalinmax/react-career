import React from 'react';
import './SectionMenu.css'
import {Link} from "react-router-dom";

const SectionMenu = () => {
    return (
        <div className={'sectionMenuWrapper'}>
            <div className="sectionMenu">
                <div className="sectionMenuCategory">
                    <Link to = '/'>
                        <span>Вакансии</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Специалисты</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Компании</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Рейтинг</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Зарплаты</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Образование</span>
                    </Link>
                    <Link to = '/developing'>
                        <span>Журнал</span>
                    </Link>
                </div>
                <div className="sectionMenuAccount">
                    <a href="#">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 17H2.6C2.03995 17 1.75992 17 1.54601 16.891C1.35785 16.7951 1.20487 16.6422 1.10899 16.454C1 16.2401 1 15.9601 1 15.4V6.0398C1 5.66343 1 5.47524 1.05919 5.31095C1.1115 5.16573 1.19673 5.03458 1.30819 4.9278C1.43428 4.80699 1.60625 4.73056 1.95018 4.5777L10 1L18.0498 4.5777C18.3938 4.73056 18.5657 4.80699 18.6918 4.9278C18.8033 5.03458 18.8885 5.16573 18.9408 5.31095C19 5.47524 19 5.66343 19 6.0398V15.4C19 15.9601 19 16.2401 18.891 16.454C18.7951 16.6422 18.6422 16.7951 18.454 16.891C18.2401 17 17.9601 17 17.4 17H15M5 17V7H15V17M5 17H15" stroke="#131A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 14H6.67452C7.1637 14 7.40829 14 7.63846 14.0553C7.84254 14.1043 8.03763 14.1851 8.21657 14.2947C8.4184 14.4184 8.59136 14.5914 8.93726 14.9373L9.06274 15.0627C9.40865 15.4086 9.5816 15.5816 9.78343 15.7053C9.96237 15.8149 10.1575 15.8957 10.3615 15.9447C10.5917 16 10.8363 16 11.3255 16H12.6745C13.1637 16 13.4083 16 13.6385 15.9447C13.8425 15.8957 14.0376 15.8149 14.2166 15.7053C14.4184 15.5816 14.5914 15.4086 14.9373 15.0627L15.0627 14.9373C15.4086 14.5914 15.5816 14.4184 15.7834 14.2947C15.9624 14.1851 16.1575 14.1043 16.3615 14.0553C16.5917 14 16.8363 14 17.3255 14H20M7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.07989 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4Z" stroke="#131A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2681 4.41115C11.4996 3.89177 11.6154 3.63208 11.7766 3.55211C11.9166 3.48263 12.0811 3.48263 12.2211 3.55211C12.3823 3.63208 12.498 3.89177 12.7295 4.41115L14.5736 8.54808C14.642 8.70162 14.6762 8.77839 14.7292 8.83718C14.776 8.8892 14.8333 8.93081 14.8972 8.95929C14.9695 8.99149 15.0531 9.00031 15.2203 9.01795L19.7246 9.49336C20.2901 9.55304 20.5728 9.58288 20.6987 9.71147C20.808 9.82316 20.8589 9.97956 20.8361 10.1342C20.8098 10.3122 20.5986 10.5025 20.1762 10.8832L16.8116 13.9154C16.6867 14.0279 16.6242 14.0842 16.5847 14.1527C16.5497 14.2134 16.5278 14.2807 16.5205 14.3503C16.5122 14.429 16.5297 14.5112 16.5645 14.6757L17.5043 19.1064C17.6223 19.6627 17.6813 19.9408 17.5979 20.1002C17.5254 20.2388 17.3924 20.3354 17.2383 20.3615C17.0609 20.3915 16.8146 20.2495 16.322 19.9654L12.3985 17.7024C12.2529 17.6184 12.1801 17.5765 12.1027 17.56C12.0342 17.5455 11.9634 17.5455 11.895 17.56C11.8176 17.5765 11.7448 17.6184 11.5991 17.7024L7.67565 19.9654C7.18307 20.2495 6.93678 20.3915 6.75937 20.3615C6.60525 20.3354 6.47221 20.2388 6.39977 20.1002C6.31638 19.9408 6.37537 19.6627 6.49336 19.1064L7.43313 14.6757C7.46801 14.5112 7.48545 14.429 7.47716 14.3503C7.46983 14.2807 7.44796 14.2134 7.41297 14.1527C7.37342 14.0842 7.31098 14.0279 7.1861 13.9154L3.82148 10.8832C3.39907 10.5025 3.18786 10.3122 3.16161 10.1342C3.1388 9.97956 3.18962 9.82316 3.29896 9.71147C3.42483 9.58288 3.70758 9.55304 4.27308 9.49336L8.77737 9.01795C8.94455 9.00031 9.02814 8.99149 9.10042 8.95929C9.16437 8.93081 9.22163 8.8892 9.26848 8.83718C9.32144 8.77839 9.35566 8.70162 9.4241 8.54808L11.2681 4.41115Z" stroke="#131A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6C16 4.34315 14.6569 3 13 3H11C9.34315 3 8 4.34315 8 6M10 14H14M12 12V16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#131A29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;