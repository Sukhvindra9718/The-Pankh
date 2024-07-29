import React from 'react';
import { Link } from 'react-router-dom';

export default class TwoSectionOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="two-section">
                    <div className="two-section__wrapper">
                        <div className="two-section__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/two-section-left-bg.jpg)'}}>
                            <div className="two-section__content-box">
                                <p className="two-section__sub-title">I See the New Collection</p>
                                <h3 className="two-section__title">Ecological Materials</h3>
                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-1">View All</Link>
                            </div>
                        </div>
                        <div className="two-section__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/two-section-right-bg.jpg)'}}>
                            <div className="two-section__content-box">
                                <p className="two-section__sub-title">I Check All Promotions</p>
                                <h3 className="two-section__title">Sustainable Objects</h3>
                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-2">See More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}