import React from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrumb extends React.Component {
    render(){
        let heading = this.props.heading;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let currentPage = this.props.currentPage ? this.props.currentPage : heading
        let Img = this.props.Img ? this.props.Img :'page-header-bg.jpg'
        return (
            <>
                <section className="page-header">
                    <div className="page-header-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}></div>
                    <div className="container">
                        <div className="page-header__inner">
                            <h2>{heading}</h2>
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                                <li><span>/</span></li>
                                <li className="active">{currentPage}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}