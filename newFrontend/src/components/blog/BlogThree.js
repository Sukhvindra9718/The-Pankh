import React from 'react';
import {Link} from 'react-router-dom';
import BlogCategory from '../blog-sidebar/BlogCategory';
import BlogComments from '../blog-sidebar/BlogComments';
import BlogLatestPost from '../blog-sidebar/BlogLatestPost';
import BlogQuery from '../blog-sidebar/BlogQuery';
import BlogSearch from '../blog-sidebar/BlogSearch';
import BlogTags from '../blog-sidebar/BlogTags';

export default class BlogThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-sidebar__left">
                                    <div className="blog-sidebar__content-box">
                                        {/* Blog Sidebar Single Start */}
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img">
                                                <img src={publicUrl+"assets/images/blog/blog-sidebar-img-1.jpg"} alt="" />
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                                    <span className="blog-one__plus"></span>
                                                </Link>
                                            </div>
                                            <div className="blog-sidebar__content">
                                                <div className="blog-sidebar__meta">
                                                    <div className="blog-sidebar__cat">
                                                        <p>Corporate</p>
                                                    </div>
                                                    <div className="blog-sidebar__date">
                                                        <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                                    </div>
                                                </div>
                                                <h3 className="blog-sidebar__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>We ariations
                                                        passages of Lorem Ipsum available, but the majority have suffered
                                                        alteration in some form.</Link></h3>
                                                <p className="blog-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                                    this best nonpofit sait laboris.</p>
                                            </div>
                                        </div>
                                        {/* Blog Sidebar Single Start */}
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img">
                                                <img src={publicUrl+"assets/images/blog/blog-sidebar-img-2.jpg"} alt="" />
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                                    <span className="blog-one__plus"></span>
                                                </Link>
                                            </div>
                                            <div className="blog-sidebar__content">
                                                <div className="blog-sidebar__meta">
                                                    <div className="blog-sidebar__cat">
                                                        <p>Corporate</p>
                                                    </div>
                                                    <div className="blog-sidebar__date">
                                                        <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                                    </div>
                                                </div>
                                                <h3 className="blog-sidebar__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>It is a long
                                                        established fact that a reader will be distracted by the readable
                                                        content of a page</Link></h3>
                                                <p className="blog-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                                    this best nonpofit sait laboris.</p>
                                            </div>
                                        </div>
                                        {/* Blog Sidebar Single Start */}
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img">
                                                <img src={publicUrl+"assets/images/blog/blog-sidebar-img-3.jpg"} alt="" />
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                                    <span className="blog-one__plus"></span>
                                                </Link>
                                            </div>
                                            <div className="blog-sidebar__content">
                                                <div className="blog-sidebar__meta">
                                                    <div className="blog-sidebar__cat">
                                                        <p>Corporate</p>
                                                    </div>
                                                    <div className="blog-sidebar__date">
                                                        <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                                    </div>
                                                </div>
                                                <h3 className="blog-sidebar__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>There are many
                                                        variations of passages of Lorem Ipsum available, but the majority have
                                                        suffered alteration</Link></h3>
                                                <p className="blog-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                                    this best nonpofit sait laboris.</p>
                                            </div>
                                        </div>
                                        {/* Blog Sidebar Single Start */}
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img">
                                                <img src={publicUrl+"assets/images/blog/blog-sidebar-img-4.jpg"} alt="" />
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                                    <span className="blog-one__plus"></span>
                                                </Link>
                                            </div>
                                            <div className="blog-sidebar__content">
                                                <div className="blog-sidebar__meta">
                                                    <div className="blog-sidebar__cat">
                                                        <p>Corporate</p>
                                                    </div>
                                                    <div className="blog-sidebar__date">
                                                        <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                                    </div>
                                                </div>
                                                <h3 className="blog-sidebar__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>The standard chunk
                                                        of Lorem Ipsum used since the 1500s is reproduced below for those
                                                        interested</Link></h3>
                                                <p className="blog-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                                    this best nonpofit sait laboris.</p>
                                            </div>
                                        </div>
                                        {/* Blog Sidebar Single Start */}
                                        <div className="blog-sidebar__single">
                                            <div className="blog-sidebar__img">
                                                <img src={publicUrl+"assets/images/blog/blog-sidebar-img-5.jpg"} alt="" />
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                                    <span className="blog-one__plus"></span>
                                                </Link>
                                            </div>
                                            <div className="blog-sidebar__content">
                                                <div className="blog-sidebar__meta">
                                                    <div className="blog-sidebar__cat">
                                                        <p>Corporate</p>
                                                    </div>
                                                    <div className="blog-sidebar__date">
                                                        <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                                    </div>
                                                </div>
                                                <h3 className="blog-sidebar__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Lorem Ipsum has been
                                                        the industry's standard dummy text ever since</Link></h3>
                                                <p className="blog-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                                    this best nonpofit sait laboris.</p>
                                            </div>
                                        </div>
                                        <div className="blog-page__pagination">
                                            <ul className="pg-pagination list-unstyled">
                                                <li className="count"><a href="#">1</a></li>
                                                <li className="count"><a href="#">2</a></li>
                                                <li className="count"><a href="#">3</a></li>
                                                <li className="next">
                                                    <a href="#" aria-label="Next"><i className="fa fa-angle-right"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <BlogSearch />
                                    <BlogCategory />
                                    <BlogLatestPost />
                                    <BlogQuery />
                                    <BlogTags />
                                    <BlogComments />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}