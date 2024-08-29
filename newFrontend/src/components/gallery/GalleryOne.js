import React from 'react';
import axios from 'axios';

export default class GalleryOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [], // Initialize state for images
        };
    }

    componentDidMount() {
        this.getAllImages();

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

    getAllImages = async () => {
        try {
            const res = await axios.get("http://165.227.97.26:3001/api/v1/images");

            if (res.data.success) {
                this.setState({ images: res.data.images }); // Update state with the fetched images
            } else {
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const { images } = this.state;

        return (
            <>
                <section className="gallery-page">
                    <div className="container">
                        <div className="row">
                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${100 * (index + 1)}ms`} key={image.id}>
                                        <div className="gallery-page__single">
                                            <div className="gallery-page__img">
                                                <img src={image.fileurl || `${publicUrl}assets/images/gallery/default.jpg`}  alt={image.title || "Gallery Image"} />
                                                <div className="gallery-page__icon">
                                                    <a className="img-popup" href={image.fileurl || `${publicUrl}assets/images/gallery/default.jpg`} target="_blank">
                                                    <i class="fas fa-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <p className="text-center">No images found!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
