import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogSectionTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-one blog-two">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Blog Post</span>
                            <h2 className="section-title__title">We Best To Largest <br /> Of This Blog.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
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
                                                <p> <span className="icon-calendar-1"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>will provide an ats resume writing and Blog. </Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
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
                                                <p> <span className="icon-calendar-1"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Leverage agile frameworks to provide</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
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
                                                <p> <span className="icon-calendar-1"></span> Nov 09 2022</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-one__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Bring to the table win-win survival</Link></h3>
                                        <p className="blog-one__text">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}