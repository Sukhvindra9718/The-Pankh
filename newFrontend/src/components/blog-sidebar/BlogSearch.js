import React from 'react';

export default class BlogSearch extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search here" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </>
        )
    }
}