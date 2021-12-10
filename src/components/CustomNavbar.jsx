import React, { Component } from 'react';

class CustomNavbar extends Component {
    render() {
        require('./style.css');
        return (
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="home.html">Du lịch <span>Đăng Khoa</span></a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="index.html" class="nav-link">Trang chủ</a></li>
	          <li class="nav-item"><a href="about.html" class="nav-link">Giới thiệu</a></li>
	          <li class="nav-item"><a href="pricing.html" class="nav-link">Bảng giá</a></li>
	          <li class="nav-item"><a href="car.html" class="nav-link">Loại xe</a></li>
	          <li class="nav-item"><a href="contact.html" class="nav-link">Liên hệ</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
        );
    }
}

export default CustomNavbar;