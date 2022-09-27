import React from 'react';
import './Error.css'
import {Link} from "react-router-dom";
const Error = () => {
    return (
        <div className={'errorWrapper'}>
            <div className="error">
                <div>                <h1>Данной путь не существует</h1>
                </div>
                <div>                <Link to={'/'}>Вернуться на главную</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
