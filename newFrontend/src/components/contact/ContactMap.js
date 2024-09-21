import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <section className="contact-page-google-map">
                    <iframe
                        title='Address' 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.329664669062!2d77.3970803868886!3d28.58988541300157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce599bca10427%3A0xb9f075b4e0790319!2sPANKH%20Society!5e0!3m2!1sen!2sin!4v1726921672617!5m2!1sen!2sin" allowfullscreen="" loading="lazy" className="contact-page-google-map__one"></iframe>

                </section>
            </>
        )
    }
}