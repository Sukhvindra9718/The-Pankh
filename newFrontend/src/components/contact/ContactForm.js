import React, { useState } from 'react';

function ContactForm() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const defaultContact =
    {
        Name: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: ""
    };

    const [contact, setContact] = useState(defaultContact)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        })
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        try {
            const contactResponse = await fetch(`http://localhost:3000/api/common/contact/register`, {
                method: "POST",
                headers: {
                    "conten-Type": "application/json"
                },
                body: JSON.stringify(contact),
            })
            if (contactResponse.ok) {
                setContact(defaultContact);
                alert("Contact saved successfully");
            }
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <section className="contact-page">
                <div className="contact-page-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/contact-page-bg.jpg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Our Contact now</span>
                                    <h2 className="section-title__title">We out The Form Prepared at <br /> Your Contact?</h2>
                                </div>
                                <div className="contact-page__form">
                                    <form onSubmit={handleContactSubmit} className="comment-one__form contact-form-validated" novalidate="novalidate">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Your name"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="off"
                                                        value={contact.Name}
                                                        onChange={handleInput}
                                                        required />

                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Email address"
                                                        name="email"
                                                        id="email"
                                                        autoComplete="off"
                                                        value={contact.Email}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input
                                                        type="number"
                                                        placeholder="Phone number"
                                                        name="Phone"
                                                        id="Phone"
                                                        autoComplete="off"
                                                        value={contact.Phone}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Subject"
                                                        name="Subject"
                                                        id="Subject"
                                                        autoComplete="off"
                                                        value={contact.Subject}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write a comment"
                                                        id="message"
                                                        autoComplete="off"
                                                        value={contact.Message}
                                                        onChange={handleInput}
                                                        required
                                                    ></textarea>
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
                                    <img src={publicUrl + "assets/images/resources/contact-page-img-1.jpg"} alt="" />
                                    <div className="contact-page__img-shape">
                                        <img src={publicUrl + "assets/images/shapes/contact-page-img-shape.png"} alt="" />
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

export default ContactForm
