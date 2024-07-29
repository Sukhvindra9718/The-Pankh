import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-page-v-2">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Blog</span>
                            <h2 className="section-title__title">Latest News & Update.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-1.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Cyclone</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>will provide an ats resume
                                                writing and Blog. </Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-2.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Homeless</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Leverage agile frameworks to
                                                provide</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-3.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Donate</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Bring to the table win-win survival</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-4.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Poors</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Capitalize on low hanging fruit</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-5.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Charity</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>A quick solutions for daily problem</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                                {/* Blog One single */}
                                <div className="blog-one__single">
                                    <div className="blog-one__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-6.jpg"} alt="" />
                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>
                                            <span className="blog-one__plus"></span>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <div className="blog-one__meta">
                                            <div className="blog-one__cat">
                                                <p>Education</p>
                                            </div>
                                            <div className="blgo-one__date">
                                                <p> <span className="icon-calendar"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Podcasting operational change</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
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
                </section>
            </>
        )
    }
}