import React from 'react';

export default class BlogComments extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__comments">
                    <h3 className="sidebar__title">Comments</h3>
                    <ul className="sidebar__comments-list list-unstyled">
                        <li>
                            <div className="sidebar__comments-icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className="sidebar__comments-text-box">
                                <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__comments-icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className="sidebar__comments-text-box">
                                <p>John Doe on Template:</p>
                                <h5>Comments</h5>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__comments-icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className="sidebar__comments-text-box">
                                <p>A Wordpress Commenter <br /> on Launch New Mobile App</p>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__comments-icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className="sidebar__comments-text-box">
                                <p>John Doe on Template:</p>
                                <h5>Comments</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}