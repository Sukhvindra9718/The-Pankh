import React from 'react';

export default class ContactForm extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-page">
                    <div className="contact-page-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/contact-page-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Our Contact now</span>
                                        <h2 className="section-title__title">We out The Form Prepared at <br /> Your Contact?</h2>
                                    </div>
                                    <div className="contact-page__form">
                                        <form action="#" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your name" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email address" name="email" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Phone number" name="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Subject" name="Subject" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea name="message" placeholder="Write a comment"></textarea>
                                                    </div>
                                                    <div className="comment-form__btn-box">
                                                        <button type="submit" className="thm-btn comment-form__btn">Send a message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__right">
                                    <div className="contact-page__img">
                                        <img src={publicUrl+"assets/images/resources/contact-page-img-1.jpg"} alt="" />
                                        <div className="contact-page__img-shape">
                                            <img src={publicUrl+"assets/images/shapes/contact-page-img-shape.png"} alt="" />
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