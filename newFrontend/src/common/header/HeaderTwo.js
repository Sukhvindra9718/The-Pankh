import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';


export default class HeaderTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header className="main-header main-header-two clearfix">
                <nav className="main-menu main-menu-two clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link to={process.env.PUBLIC_URL + `/`}>
                                        <img src={publicUrl+"assets/images/resources/logo-2.png"} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <MobileMenu />
                                    <Nav />
                                </div>
                                <Link to={process.env.PUBLIC_URL + `/donate-now`} className="thm-btn main-header__btn">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}