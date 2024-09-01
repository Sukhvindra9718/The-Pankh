import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
// import { ImLinkedin } from "react-icons/im";
import React, { useState } from "react";
import "../Style/contact.scss";
import Banner from "../Components/Banner";
import BreadCrumb from "../Components/BreadCrumb";
import MetaData from "../Components/MetaData";
function ContactUs() {
  const [ContactUser, setContactUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Organization: "",
    Designation: "",
    Message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ContactUser);

    try {
      const ContactResponse = await fetch(
        `http://localhost:3001/api/common/contact/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ContactUser),
        }
      );
      if (ContactResponse.ok) {
        // setContactUser({
        //   Name: "",
        //   Email: "",
        //   Contact: "",
        //   Organization: "",
        //   Designation: "",
        //   Message: "",
        // });
        const ContactData = await ContactResponse.json();
        console.log(ContactData);
        alert("Contact details saved successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactUser({
      ...ContactUser,
      [name]: value,
    });
  };
  return (
    <main>
      <MetaData title="Contact Us" />
      <Banner
        imageURL="https://media.istockphoto.com/id/617893290/photo/modern-keyboard-wih-contact-us-button.jpg?s=2048x2048&w=is&k=20&c=nlkfoUygWXdb25gdYqsiIl0rWQyOyCe1qYvp9bar2n0="
        loading="lazy"
      />
      <BreadCrumb title="Contact Us" />
      <div className="contact-content">
        <div className="contact-form-container">
          <div className="contact-detail">
            <div className="ContactUsHeader">
              <h2>Contact Us</h2>
            </div>

            <div className="contactAddress">
              <div className="addressCompany">
                <div className="detailImage TPadding-half">
                  <SlLocationPin />
                </div>
                <div className="addressWrittenText">
                  <p>
                    PK-22,Ground Floor, Sec-122 Gautam Budh Nagar, Noida, Uttar
                    Pradesh-201307
                  </p>
                </div>
              </div>
              <div className="addressCompany">
                <div className="detailImage">
                  <TfiEmail />
                </div>
                <div className="addressWrittenText">
                  <p>president.pankh@gmail.com</p>
                </div>
              </div>
              <div className="addressCompany">
                <div className="detailImage">
                  <FaPhone />
                </div>
                <div className="addressWrittenText">
                  <p>+91 9911959088, 01206055473</p>
                </div>
              </div>
              {/* <div className='addressCompany'>
                                <div className='detailImage'>
                                    <ImLinkedin />
                                </div>
                                <div className='addressWrittenText'>
                                    <p>Linkedin Profile</p>
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="contact-form">
            <div className="Contact-Text">
              <h2>Get in Touch</h2>
              <p>Feel free to drop us a line below</p>
            </div>

            <form onSubmit={handleSubmit} className="ContactFormDetail">
              <input
                className="contactInputs"
                type="text"
                required
                name="Name"
                id="Name"
                autoComplete="off"
                value={ContactUser.Name}
                onChange={handleData}
                placeholder="Your Name"
              />

              <input
                className="contactInputs"
                type="email"
                required
                name="Email"
                id="Email"
                autoComplete="off"
                value={ContactUser.Email}
                onChange={handleData}
                placeholder="Your Email"
              />

              <input
                className="contactInputs"
                type="text"
                required
                name="Phone"
                id="Phone"
                autoComplete="off"
                value={ContactUser.Phone}
                onChange={handleData}
                placeholder="Your Contact No"
              />
              <input
                className="contactInputs"
                type="text"
                required
                name="Organization"
                id="Organization"
                autoComplete="off"
                value={ContactUser.Organization}
                onChange={handleData}
                placeholder="Your Organization"
              />
              <input
                className="contactInputs"
                type="text"
                required
                name="Designation"
                id="Designation"
                autoComplete="off"
                value={ContactUser.Designation}
                onChange={handleData}
                placeholder="Your Designation"
              />
              <textarea
                className="contactInputsArea"
                type="textarea"
                rows="5"
                required
                name="Message"
                id="Message"
                autoComplete="off"
                value={ContactUser.Message}
                onChange={handleData}
                placeholder="Type your message here..."
              />
              <button type="submit" className="ContactButton">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.039925715435!2d73.75018757599479!3d18.61727388249519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9813e9f66a3%3A0xa90cd8d849245b08!2sAustin%20Park%20St%2C%20Ashok%20Nagar%2C%20Tathawade%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1718356749345!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}

export default ContactUs;
