import React from 'react';

export default class GalleryOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
              var id = parseInt($(this).attr("data-group"), 10);
        
                if (!groups[id]) {
                    groups[id] = [];
                }
        
              groups[id].push(this);
            });
        
            $.each(groups, function () {
              $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                  enabled: true
                }
              });
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="gallery-page">
                    <div className="container">
                        <div className="row">
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-1.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href={publicUrl+"assets/images/gallery/gallery-page-1.jpg"}><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-2.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href={publicUrl+"assets/images/gallery/gallery-page-2.jpg"}><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-3.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href="assets/images/gallery/gallery-page-3.jpg"><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-4.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href="assets/images/gallery/gallery-page-4.jpg"><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-5.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href={publicUrl+"assets/images/gallery/gallery-page-5.jpg"}><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                            {/* Gallery Page Single Start */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                                <div className="gallery-page__single">
                                    <div className="gallery-page__img">
                                        <img src={publicUrl+"assets/images/gallery/gallery-page-6.jpg"} alt="" />
                                        <div className="gallery-page__icon">
                                            <a className="img-popup" href={publicUrl+"assets/images/gallery/gallery-page-6.jpg"}><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gallery Page Single End */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}