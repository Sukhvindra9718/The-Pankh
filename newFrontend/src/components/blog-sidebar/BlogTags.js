import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTags extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags</h3>
                    <div className="sidebar__tags-list">
                        <Link to={process.env.PUBLIC_URL + `/`}>Fundraising</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Charity</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Water</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Donation</Link>
                        <Link to={process.env.PUBLIC_URL + `/`}>Education</Link>
                    </div>
                </div>
            </>
        )
    }
}