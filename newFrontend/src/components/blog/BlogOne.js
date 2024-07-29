import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-page-V-1">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Blog</span>
                            <h2 className="section-title__title">Latest News & Update.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-1.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Bring to the table win-win
                                                survival</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-1.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Kevin Martin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-2.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>will provide an ats resume
                                                writing and Blog.</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-2.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Jessica Brown</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-3.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Leverage agile frameworks to
                                                provide</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-3.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Kevin Coper</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-4.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Capitalize on low hanging
                                                fruit</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-3.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Kevin Coper</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-5.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>A quick solutions for daily
                                                problem</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-2.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Jessica Brown</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                                {/* Blog Three Single */}
                                <div className="blog-three__single">
                                    <div className="blog-three__img">
                                        <img src={publicUrl+"assets/images/blog/blog-1-6.jpg"} alt="" />
                                    </div>
                                    <div className="blog-three__content">
                                        <ul className="list-unstyled blog-three__meta">
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-clock"></i> by Admin </Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i> May 20, 2022</Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>Podcasting operational
                                                change</Link></h3>
                                        <div className="blog-three__person">
                                            <div className="blog-three__person-img">
                                                <img src={publicUrl+"assets/images/blog/blog-3-person-img-1.jpg"} alt="" />
                                            </div>
                                            <div className="blog-three__person-name">
                                                <p><span>By</span> Kevin Martin</p>
                                            </div>
                                        </div>
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