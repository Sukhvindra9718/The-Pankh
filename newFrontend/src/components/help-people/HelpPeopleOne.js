import React from 'react';
import { Link } from 'react-router-dom';

export default class HelpPeopleOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="help-people">
                    <div className="help-people-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/help-people-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="help-people__inner wow fadeInUp" data-wow-delay="300ms">
                            <div className="help-people__sub-title-box">
                                <p>For Good</p>
                            </div>
                            <h3 className="help-people__title">Become Volunteer</h3>
                            <p className="help-people__text">Lorem ipsum dolor sit amet, consectetur nod adipisicing elit sed do
                                eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link to={process.env.PUBLIC_URL + `/team-details`} className="thm-btn help-people__btn">Join Us Now</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}