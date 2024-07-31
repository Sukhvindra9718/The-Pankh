import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';

export default class HeaderOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header className="main-header clearfix">
                    <div className="main-header__top clearfix">
                        <div className="container clearfix">
                            <div className="main-header__top-inner clearfix">
                                <div className="main-header__top-left">
                                    <ul className="list-unstyled main-header__top-address">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="tel:5204654544">+5204654544</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="mailto:demo@example.com">demo@example.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                            <div className="text">
                                                <p>24/21, 2nd Rangpur, Sapla</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main-header__top-right">
                                    <ul className="list-unstyled main-header__top-right-content">
                                        <li><Link to={process.env.PUBLIC_URL + `/`}>Login</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + `/`}>Help You</Link></li>
                                        <SearchButton />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu clearfix">
                        <div className="container clearfix">
                            <div className="main-menu-wrapper clearfix">
                                <div className="main-menu-wrapper__left">
                                    <div className="main-menu-wrapper__logo">
                                        <Link to={process.env.PUBLIC_URL + `/`}>
                                            <img src={publicUrl+"assets/images/resources/logo-1.png"} alt="" />
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