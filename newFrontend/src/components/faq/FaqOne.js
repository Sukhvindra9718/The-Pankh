import React from 'react';

export default class FaqOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".accrodion-grp").length) {
            var accrodionGrp = $(".accrodion-grp");
            accrodionGrp.each(function () {
              var accrodionName = $(this).data("grp-name");
              var Self = $(this);
              var accordion = Self.find(".accrodion");
              Self.addClass(accrodionName);
              Self.find(".accrodion .accrodion-content").hide();
              Self.find(".accrodion.active").find(".accrodion-content").show();
              accordion.each(function () {
                $(this)
                  .find(".accrodion-title")
                  .on("click", function () {
                    if ($(this).parent().hasClass("active") === false) {
                      $(".accrodion-grp." + accrodionName)
                        .find(".accrodion")
                        .removeClass("active");
                      $(".accrodion-grp." + accrodionName)
                        .find(".accrodion")
                        .find(".accrodion-content")
                        .slideUp();
                      $(this).parent().addClass("active");
                      $(this).parent().find(".accrodion-content").slideDown();
                    }
                  });
              });
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="faq-one">
                    <div className="faq-one-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/faq-one-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="faq-one__left">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Our FAQ</span>
                                        <h2 className="section-title__title">We out The Form Prepared at <br /> Your Contact?</h2>
                                    </div>
                                    <div className="faq-one__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className="accrodion">
                                                <div className="accrodion-title">
                                                    <h4>Maecenas facilisis erat id odio</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>There are many variations of passages of is psum available, but the
                                                            majority have suffered alteration in some we form, by injected
                                                            humour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion active">
                                                <div className="accrodion-title">
                                                    <h4> Phasellus et vehicula nulla</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>There are many variations of passages of is psum available, but the
                                                            majority have suffered alteration in some we form, by injected
                                                            humour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title">
                                                    <h4>Maecenas malesuada</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>There are many variations of passages of is psum available, but the
                                                            majority have suffered alteration in some we form, by injected
                                                            humour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion last-chiled">
                                                <div className="accrodion-title">
                                                    <h4>Why you join our team</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>There are many variations of passages of is psum available, but the
                                                            majority have suffered alteration in some we form, by injected
                                                            humour</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="faq-one__right">
                                    <div className="faq-one__img wow slideInRight" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                        <img src={publicUrl+"assets/images/resources/faq-1-1.png"} alt="" />
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