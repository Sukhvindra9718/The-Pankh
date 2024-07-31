import React from 'react';
import {Link} from 'react-router-dom';

export default class CtaOne extends React.Component {
    render(){
        return (
            <>
                <section className="cta-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cta-one__inner">
                                    <div className="cta-one__left">
                                        <div className="cta-one__icon">
                                            <span className="icon-help"></span>
                                        </div>
                                        <h2 className="cta-one__title">Let’s Make a Difference in <br /> the Lives of Others</h2>
                                    </div>
                                    <div className="cta-one__right">
                                        <Link to={process.env.PUBLIC_URL + `/team-details`} className="thm-btn cta-one__btn">become a volunteer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}