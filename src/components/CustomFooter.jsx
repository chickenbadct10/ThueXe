import React, { Component } from 'react';

class CustomFooter extends Component {
    render() {
        return (
            <div>
                <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2"><a href="#" className="logo">Du lịch<span> Đăng Khoa</span></a></h2>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                            <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                            <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Thông tin</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="py-2 d-block">Giới thiệu</a></li>
                            <li><a href="#" className="py-2 d-block">Bảng giá</a></li>
                            <li><a href="#" className="py-2 d-block">Loại xe</a></li>

                        </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Hỗ trợ khách hàng</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="py-2 d-block">Thông tin liên hệ</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Đường dây nóng</h2>
                        <div className="block-23 mb-3">
                            <ul>
                            <li><span className="icon icon-map-marker" /><span className="text">70/51 Đường Cách Mạng Tháng 8, Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ</span></li>
                            <li><a href="#"><span className="icon icon-phone" /><span className="text">0828.07.15.10</span></a></li>
                            <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>

            </div>
        );
    }
}

export default CustomFooter;