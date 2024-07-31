import React from 'react';

export default class BlogQuery extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__support">
                    <div className="sidebar__support-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/sidebar-support-bg.jpg)'}}></div>
                    <h3 className="sidebar__suppot-title">Have Any Query?</h3>
                    <p className="sidebar__suppot-text">Great fruit grass their are first over spirit good whose very subdue</p>
                    <div className="sidebar__support-btn-box">
                        <button type="submit" className="thm-btn sidebar__support-btn">Send Message</button>
                    </div>
                </div>
            </>
        )
    }
}