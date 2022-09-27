import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="headerWrapper">
                <Link to={'/'}>
                    <div className="headerLogo">
                <span style={{fontWeight: '600'}}>
                    Bold
                </span>
                        <span> Career |</span>
                    </div>
                </Link>
                <div className="headerLinkToTopic">
                    <a href="https://github.com/shabalinmax/react-career">
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
