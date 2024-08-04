import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <section className="contact-page-google-map">
                    <iframe 
                        title='Address'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.1981178466776!2d77.39488217549942!3d28.59383277568586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzM3LjgiTiA3N8KwMjMnNTAuOSJF!5e0!3m2!1sen!2sin!4v1722785048684!5m2!1sen!2sin" loading="lazy" className="contact-page-google-map__one"></iframe>

                </section>
            </>
        )
    }
}