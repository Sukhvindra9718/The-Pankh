import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogLatestPost extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <ul className="sidebar__post-list list-unstyled">
                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl+"assets/images/blog/lp-1-1.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <span className="sidebar__post-content-meta"><i className="far fa-user-circle"></i> Admin</span>
                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>Promoting the Rights of Children</Link>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl+"assets/images/blog/lp-1-2.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <span className="sidebar__post-content-meta"><i className="far fa-user-circle"></i> Admin</span>
                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>It is a long established fact</Link>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__post-image">
                                <img src={publicUrl+"assets/images/blog/lp-1-3.jpg"} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <span className="sidebar__post-content-meta"><i className="far fa-user-circle"></i> Admin</span>
                                    <Link to={process.env.PUBLIC_URL + `/blog-details`}>The standard chunk of Lorem Ipsum</Link>
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}