import React, { Component } from 'react';
import Navbar from './CustomNavbar';
import bg from '../img/bg_1.jpg';
import route from '../img/route.png';
import handshake from '../img/handshake.png';
import rent from '../img/car-rental.png';
import carwedding from '../img/car.png';
import transportation from '../img/transportation.png';
import carairport from '../img/car-airport.png';
import cartour from '../img/car-tour.png';

import Footer from './CustomFooter';

class Home extends Component {
    render() {
        require('./style.css');
        require('./css/animate.css');
        require('./css/jquery.timepicker.css');
        require('./css/bootstrap-datepicker.css');
        require('./css/aos.css');
        require('./css/magnific-popup.css');
        require('./css/owl.theme.default.min.css');
        return (
            <div>
                <Navbar />
                <div className="hero-wrap ftco-degree-bg" style={{backgroundImage: 'url('+bg+')'}} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
                            <div className="col-lg-8 ftco-animate fadeInUp ftco-animated">
                                <div className="text w-100 text-center mb-md-5 pb-md-5">
                                    <h1 className="mb-4">Dịch vụ du lịch Đăng Khoa</h1>
                                    <p style={{fontSize: 18}}>Nhanh chóng, tiện lợi và chất lượng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="services-wrap rounded-right heading-section">
                                <h2 className="mb-3" style={{textAlign:'center'}}>Dịch vụ du lịch Đăng Khoa</h2>
                                <div className="row d-flex mb-4">
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={route}/></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Giao xe tận nhà</h3>
                                        </div>
                                    </div>      
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={handshake}/></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Giá cả tốt nhất</h3>
                                        </div>
                                    </div>      
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={rent}/></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Chất lượng bảo đảm</h3>
                                        </div>
                                    </div>      
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                        <h2 className="mb-3">Cung cấp các dịch vụ</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="services services-2 w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={carwedding}/></div>
                        <div className="text w-100">
                            <h3 className="heading mb-2">Thuê xe cưới</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="services services-2 w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={transportation}/></div>
                        <div className="text w-100">
                            <h3 className="heading mb-2">Khám chữa, bệnh</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="services services-2 w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={carairport}/></div>
                        <div className="text w-100">
                            <h3 className="heading mb-2">Đưa, đón sân bay</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="services services-2 w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center"><img class="img-responsive" src={cartour}/></div>
                        <div className="text w-100">
                            <h3 className="heading mb-2">Thuê xe tự lái</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>   
                <Footer />
            </div>
        );
    }
}

export default Home;