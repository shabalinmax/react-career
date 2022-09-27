import React from 'react';
import './Developing.css'
import {Link} from "react-router-dom";
const Developing = () => {
    return (
        <div className={'developingWrapper'}>
            <div className='developing'>
                <div><h1>Уважаемый пользовать!</h1></div>
                <div><h2>Сейчас данный раздел находится в стадии разработки :)</h2></div>
                <Link to = '/'>
                    <h3>Но вы всегда можете посмотреть все актуальные вакансии или добавить свою</h3>
                </Link>
            </div>


        </div>
    );
};

export default Developing;
