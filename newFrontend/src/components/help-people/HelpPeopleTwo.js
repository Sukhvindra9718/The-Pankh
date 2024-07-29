import React from 'react';

export default class HelpPeopleTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="help-one">
                    <div className="help-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/help-one-bg.jpg)'}}></div>
                    <div className="container">
                        <h3 className="help-one__title">How You Can Help Us?</h3>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="help-one__content-box">
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            <span className="icon-donation-1"></span>
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Start investing in our volunteer group</h4>
                                            <p>To make sure education of poor children While atever motivates you to host,your
                                                participation has the.</p>
                                        </div>
                                    </div>
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            <span className="icon-heart"></span>
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Childhood Education Development support</h4>
                                            <p>To make sure education of poor children While atever motivates you to host,your
                                                participation has the.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="help-one__content-box">
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            <span className="icon-donation"></span>
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Because Everyone Deserves Clean Water</h4>
                                            <p>To make sure education of poor children While atever motivates you to host,your
                                                participation has the.</p>
                                        </div>
                                    </div>
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            <span className="icon-bankruptcy"></span>
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Child Deserves Better Healthy Foods</h4>
                                            <p>To make sure education of poor children While atever motivates you to host,your
                                                participation has the.</p>
                                        </div>
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