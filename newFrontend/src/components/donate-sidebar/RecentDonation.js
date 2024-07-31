import React from 'react';

export default class RecentDonation extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="donation-details__recent-donation">
                    <h3 className="donation-details__recent-donation-title">Recent Donation</h3>
                    <ul className="list-unstyled donation-details__recent-donation-list">
                        <li>
                            <div className="donation-details__recent-donation-img">
                                <img src={publicUrl+"assets/images/resources/donation-details-recent-donation-img-1.jpg"} alt="" />
                            </div>
                            <div className="donation-details__recent-donation-content">
                                <h4 className="donation-details__recent-donation-amount">$40</h4>
                                <p className="donation-details__recent-donation-name">David Coper <span>3 hours ago</span></p>
                                <p className="donation-details__recent-donation-text">God bless you dear</p>
                            </div>
                        </li>
                        <li>
                            <div className="donation-details__recent-donation-img">
                                <img src={publicUrl+"assets/images/resources/donation-details-recent-donation-img-2.jpg"} alt="" />
                            </div>
                            <div className="donation-details__recent-donation-content">
                                <h4 className="donation-details__recent-donation-amount">$55</h4>
                                <p className="donation-details__recent-donation-name">Sarah Smith <span>10 hours ago</span></p>
                                <p className="donation-details__recent-donation-text">My prayers are with you
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="donation-details__recent-donation-img">
                                <img src={publicUrl+"assets/images/resources/donation-details-recent-donation-img-3.jpg"} alt="" />
                            </div>
                            <div className="donation-details__recent-donation-content">
                                <h4 className="donation-details__recent-donation-amount">$44</h4>
                                <p className="donation-details__recent-donation-name">Dean Elgar <span>20 hours ago</span></p>
                                <p className="donation-details__recent-donation-text">My prayers are with you </p>
                            </div>
                        </li>
                        <li>
                            <div className="donation-details__recent-donation-img">
                                <img src={publicUrl+"assets/images/resources/donation-details-recent-donation-img-4.jpg"} alt="" />
                            </div>
                            <div className="donation-details__recent-donation-content">
                                <h4 className="donation-details__recent-donation-amount">$90</h4>
                                <p className="donation-details__recent-donation-name">Mike Piter <span>2 Days ago</span></p>
                                <p className="donation-details__recent-donation-text">Wishing you blessings</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}