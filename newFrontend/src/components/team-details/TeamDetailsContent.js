import React from 'react';

export default class TeamDetailsContent extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($("#datepicker").length) {
            $("#datepicker").datepicker();
        }
        
        if ($("#datepicker2").length) {
            $("#datepicker2").datepicker();
        }
        
        if ($("#datepicker-inline").length) {
            $("#datepicker-inline").datepicker();
        }
        
        $('input[name="time"]').ptTimeSelect();
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Team Details Start */}
                <section className="team-details">
                    <div className="container">
                        <div className="team-details__inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-left">
                                        <div className="team-details__top-img">
                                            <img src={publicUrl+"assets/images/team/team-details-img-1.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-right">
                                        <div className="team-details__top-content">
                                            <p className="team-details__top-title">Co founder &amp; CEO</p>
                                            <h3 className="team-details__top-name">David Hardson</h3>
                                            <div className="team-details__social">
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-facebook"></i></a>
                                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                            <p className="team-details__top-text-1">I help my clients stand out and they help me
                                                grow.</p>
                                            <p className="team-details__top-text-2">Lorem ipsum dolor sit amet, con adipiscing elit
                                                tiam convallis elit id impedie. Quisq commodo simply free ornare tortor.</p>
                                            <p className="team-details__top-text-3">If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything simply free text embarrassing
                                                hidden in the middle of text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Details End */}

                {/* Join Team End */}
                <section className="join-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="join-team__Left">
                                    <div className="join-team__images">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="join-team__img-single">
                                                    <img src={publicUrl+"assets/images/team/join-team-img-1.jpg"} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="join-team__img-single">
                                                    <img src={publicUrl+"assets/images/team/join-team-img-2.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="join-team__content">
                                        <h3 className="join-team__title">Requirements</h3>
                                        <p className="join-team__text">Aliquam hendrerit a augue insu image pellentes que id erat
                                            quis sollicitud null mattis Ipsum is simply dummy typesetting industry. Alienum
                                            phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in meifn
                                            pericula euripidis.</p>
                                        <ul className="list-unstyled join-team__points">
                                            <li>Nsectetur cing do not elit.</li>
                                            <li>Suspe ndisse suscipit sagittis in leo.</li>
                                            <li>Entum estibulum dignissim lipsm posuere.</li>
                                        </ul>
                                        <div className="join-team__contact">
                                            <p>
                                                <a href="tel:1307776-0608" className="join-team__phone">+ 1 (307) 776-0608</a>
                                                <a href="mailto:needhelp@company.com"
                                                    className="join-team__email">needhelp@company.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="join-team__right">
                                    <form className="join-team__form">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Phone Number" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Address" name="Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Date of Birth" name="date" id="datepicker" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Occupation" name="Occupation" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input join-team__message-box">
                                                    <textarea name="message" placeholder="Write a Comment"></textarea>
                                                </div>
                                                <div className="join-team__btn-box">
                                                    <button type="submit" className="thm-btn join-team__btn">Send us a message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Join Team End */}
            </>
        )
    }
}