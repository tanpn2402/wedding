import React from "react"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
    Col,
    Row,
    Input,
    Label
  } from 'reactstrap';
import $ from "jquery"
import FlipClock from "../components/FlipClock"
import GoogleMapReact from 'google-map-react';
import { Parallax, Background } from 'react-parallax';
import Gallery from 'react-grid-gallery';

const items = [
    {
        src: 'https://lh3.googleusercontent.com/icGgaayU9WuXFlX0K_kTzAvgasVIIzEPyhF0iUptTZROdzalUAq8z0CGDXYcDFr6L14iglWZSTEOtp4fAetOaeFSZ967xY_zsTmIZ2wGxI0knKAHxOEZNWh-QeQSuCw5HjJcCdkfpEY-4nNBGv2mC1D1NWZn4ipoqZbmPurZYB6VW0XGzYDy3A5u8pEO6rhD1NZEQg8aFApBvst_lDMCYNSiWGSbG5LZoV-huj5b3_OIl3KlT_zVf5rXAciX5ruW42m9Jj44ahqwFolMu8ug_YQcmTCqtuQi4d749GfyNu7ZSAo-BWaa9MfBUh-n_o-IdwVh3uv-qI5mMLmawTXHwsLQTrzQ-BYWfDmiBRd3QbPDLEHuZfmDAdIkYg3gkvxOEA3oB5QPOrGNWgcOc3h8lYijfIuieUeMYhXu7yphMNm3yhmyOp_SCLzzaOvr07Ut4tCAnpZg0sp5YO9wF1vNA3Lu24ex-kalzYxYSN7ldO9zQvHCbjtDKrJy0gDgd2WKvuVj7qCAPeoaF5sQIzWnM01I50RaTgZLkgAxlTnC-0UHomFkDNysAiYUffGDQXp1Oux6ptDb6yQKPBZwop2Yxc5EkKn_1Bo-lHz6rU8=w2928-h1952-no',
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: 'https://lh3.googleusercontent.com/d5bBtcTfu1FWeLui30fbiAuiG1dKN3h4Z0Xn4zj2vRMDWXmqj1Gthbodx4pVq615yKXiYHNsTN2LVOyijmdiFn6e9erkmqK5TYKueie_EY8A1sFr7NJCU62g1VYkClf1zEROhsJ-cYq0TsOvJf0Hd4sXLIQlm-b7VTzZe_HxqCc_20qI-Gk-2gO1dA0jrvL-Z8ICXFEV88LXWKbLGKzfRMtIxqP5RkO0xf2ydDKfDrjUdILHwRNFn76H1yYEKfvu6w6hxOGaOoSCrS2XenXTX77OLy4swKU9QKSmtiGX3jwqBFXVP14lhQNm3OC_qPNhh9iLd-rIbAwkEXq49OSPge-95Y_egDVsvPJQfPgM8qAmgVrXwUJ5H8zOU90BhP0Gh7rFTYp4greDz59ZN1spRkUcEnb-jojiHCSGcUvwxW1lgJTMUwu5eRW-jiexj8ncTGM7nPgjV-qwl2jeOAJ0ro9jkNN8xQ1mEFoZSNFPwD-QuMHSX3rtGWhPASpDjswEw2ZlE5OXuG67jlH71PizpH1z3ZblmtLVTxqo92x6zNzWWJZ-LsgfV8iMWdHgDf9hTIw4vVr8pPMBL_kn04d0ZZI59kjHLuf1VKweD1w=w1302-h1952-no',
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: 'https://lh3.googleusercontent.com/r4sPJBuuq8CzwxGaqAswqNXo3kc3btUcXKBAoLNDB14AauWYXS1AIMI02BHV5go8-eaq3EHuiX9YQ6P-WgU5cOaVVgnC4jFgQoQaj9lInY3PT3BU5zwhEJVF-QdNqJcYPYyaI8BuPcQYXE6H4Qs2vCoswUlW24QlKr-F-WiLGGNZXH9BQAf9fSNh2pdYptuZfR7Pms4R0zy9AAlNWGT9vjSyYFKNhuGDS3fFXTX1SDX0SvqGk5rHiJ08ke5XsNxeFYsRlfjtEdAVwhqf5jYulcfzEuF312UwAscjPUiY8deF_yu7GsHh9FMCDc4YbT8m1jJDpWG6ZX0yS2GU1Wl6fynOoSKYjDsQpqcDfY47kWu4oXk3JvYXIHL3C40BAoR5EdZzJNlT-QtxvNGquiBga6CaM4LIJw61anj2yEyyBdv6YtQk1hCS9EtO9KsQHRXjAWy9llA-EnKZIoWdiIJTq9cmkhAcqRzUrlUqO2NeZc-5oluxsX9vpC7upjtdk6iS8SFcSjvsJwVgusl6ta2HFGp6xiVRyVPdODGvVjYasprAa5VxijYDRcABojjcjydihFrsQ_2ROQCZQbfcr18Biy6Ecn36RM1ScPzO1EQ=w2928-h1952-no',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://lh3.googleusercontent.com/i1Ky5oENejuZAby6YV6zpWP7xbGQcgDzSY4XKkuBH_UIiiJy6dxVXtFj1gA8OHJKQKc6mpIyhQyi_VGOuMqP9Ui5PRpEiGRg_zH6ScmXpbx76Y6V8c9W0r3LJpkL93vJai-SuWccmiqRq-JP4tpq7OnV3qTaRn2wajQNuFXTrjLvWojytWVII49iskhWakzC-wsru1UTyb34d16_DiNWPfATAnT0CJTdEzX_MggvplAfYGbsvWBbUQ9F8DdK9Ne8YDfM-d5mm2y0ZpC8REnFUCR55EH67dZgUBFltLC_7Vvwz8iXQM51C0SWoHslcPSkgaOY4J-7CKOzqpZnB_-Eb91qPikLfbtpq6s2qlJ7pagh3U5YXC5BCO3g22YCTDhr9ziLs3c8eWsQSrwFLXatP3xm0JaUlYIn6lXh9GSCfykeK82XGHziMGzQFb1cwc6svLFdA0TauPvvPWYL0DX16xY3Ge0srMHE_WeuzUljsuSsGf2qgZPxsfVypxJ3X0RSAg3mLbCAuObM-H6qNNMh0fVJ3aLjqLE6lhzWx3mQpWr8pcFukfB-yefLbhk9CmbC7NgQxazfmINs2rqhh6P8rVoJeJ6mGOBcGy0mJgs=w3052-h1954-no',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://lh3.googleusercontent.com/j1z0vXd6FcQwtzaNLqNkbqM2K7LMXiaSXn5d_95-RCTVadKPMZlg9HRv852PgqW05fo2sK72JKzk_Ss5IdXmnGfB_ZcSi47Hf3YOhT8UI1QX7EDp5MyC_M6LyeKrnu-RhdgKbnwyinsL-_6hoR33nb1yskn5vrTBHCqbOlasdflfOIwD-qCYR7kPsCuHC6oQBzjJ4s8CoK4oINLjyIo_WU_AJ7epnIdPJuD2r9YJ3M8Qfbhqr2VbZjh90sHHKWWZHMSxIqkffnGA84HxmKyTp845bTwcIQJTgug59HA9FxnDW_XGvreZPG-Hv1ZL-H2JNbnZLmNW-o6pt47xvqDd3gHI95VxsG8RNUZaWPI7M3xbpGzgkHpEXUvt_OjFV-aH1EkBt_KCXOm1jMJEjU6Jfqji7kkFlXnwYBNQ_WQ3NZDn03umbh3DSsTezl--dfx8COTzpvksuvqPcHu7xoX0zdGgvHg5IDfiSpv-aX3fo_8UcEUdjOtSLwV9dV1xuvwCJnlJDrt4r5ETqXZloo3jIz_HapulggBXK01w45EBJPThI2cj91xTXLxZfsbddQGJ2yR1Mgiaz7xMDzUMG5Tap4SkXdgagIRUnKLaRjo=w2928-h1952-no',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
]

class HeaderCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        this.props.innerRef(this)
    }

    onExiting() {
        this.animating = true;
    }
    
    onExited() {
        this.animating = false;
    }
    
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src} >
                    <img src={item.src} alt={item.altText} />
                </CarouselItem>
            );
        });

        return (
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                </Carousel>
        )
    }
}

class MenuNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="brand">
                    <ul className="name">
                        <li><span>Nhật Tân</span></li>
                        <li className="and">&</li>
                        <li><span>Phượng Hằng</span></li>
                    </ul>

                    {/* <ul className="name sm">
                        <li><span>T</span></li>
                        <li className="and">&</li>
                        <li><span>H</span></li>
                    </ul> */}
                </div>
                <div className="hamburger-icon" ref={n => this.hamburger = n} onClick={e => this.toggleNavList()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="nav__link-list" ref={n => this.navList = n}>
                    <a className="navigation__link active" href="#welcome" onClick={e => this.props.onClick(e)}>Welcome</a>
                    <a className="navigation__link" href="#about" onClick={e => this.props.onClick(e)}>Giới thiệu</a>
                    <a className="navigation__link" href="#story" onClick={e => this.props.onClick(e)}>Câu chuyện</a>
                    <a className="navigation__link" href="#event" onClick={e => this.props.onClick(e)}>Sự kiện</a>
                    <a className="navigation__link" href="#gallery" onClick={e => this.props.onClick(e)}>Thư viện</a>
                    <a className="navigation__link" href="#map" onClick={e => this.props.onClick(e)}>Bản đồ</a>
                    <a className="navigation__link" href="#thanks" onClick={e => this.props.onClick(e)}>Lời cám ơn</a>
                </div>
                
            </React.Fragment>
        )
    }

    toggleNavList() {
        this.hamburger.classList.toggle("open")
        this.navList.classList.toggle("open")
        
    }
}

class About extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={2} md={1} sm={12} xs={12}></Col>
                <Col lg={4} md={5} sm={12} xs={12} className="box">
                    <div className="header">
                        <h2>Phạm Nhật Tân</h2>
                    </div>
                    <div className="avatar">
                        <div className="img grooms"></div>
                    </div>
                    <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis auctor in est ac dignissim.
                    </div>
                </Col>
                <Col lg={4} md={5} sm={12} xs={12} className="box">
                    <div className="header">
                        <h2>Trần Thị Phượng Hằng</h2>
                    </div>
                    <div className="avatar">
                        <div className="img brides"></div>
                    </div>
                    <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor non sem eu faucibus. Aenean pellentesque dui tincidunt, dictum massa congue, euismod ipsum. Duis auctor in est ac dignissim.
                    </div>

                </Col>
                <Col lg={2} md={1} sm={12} xs={12}></Col>
            </Row>
        )
    }
}

class Img extends React.Component {
    
    render() {
        return (
            <div className="photo" style={{ backgroundImage: `url(${this.props.src})` }}>
                {this.props.children}
            </div>
        )
    }
}

const imageSrc = (src) => {
    return {
        src: src,
        thumbnail: src,
        thumbnailWidth: 100,
        thumbnailHeight: 60,
    }
}

class StoryItem extends React.Component {

    constructor(props) {
        super(props)

        this.images = [
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            },
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            },
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            },
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            },
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            },
            {
                src: 'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg',
                thumbnail: "http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'",
                thumbnailWidth: 100,
                thumbnailHeight: 60,
            }
        ]
    }

    render() {
        return (
        <React.Fragment>
            <Row className="story-item">
                
                <Col md={6} sm={12} className="left event">
                    <div className="heart"><img src={`/assets/images/heart.png`} /></div>
                    <div className="des">
                    <h2>Lần gặp đầu tiên</h2>
                    <h3>14-02-2013</h3>
                        "Trong một buổi đi chơi cùng nhóm bạn thời cấp một, tôi vô tình gặp được cô ấy, ấn tượng đầu của tôi là cô ấy giống như một cô bé, nhỏ nhắn, xinh xắn và dễ thương"
                        <div>Nhật Tân</div>
                    </div>
                </Col>
                <Col md={6} sm={12} className="right image">
                    <div style={{ width: "100%", height: "100%" }}>
                        
                    </div>
                </Col>
            </Row>

            <Row className="story-item">
                <Col md={6} sm={12} className="left image">
                    <div style={{ width: "100%", height: "100%" }}>
                        <Gallery images={[
                            imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZ01KSlp4Q1hFVmtxb2RuVDBNMVRDcGJHOVFz=w2160-h1952-iv1"),
                            imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYUDJZdUttcnotbEJmOGw1Q3BvMm9BOUlqajZJ=w2160-h1952-iv1"),
                            imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYQWl0QkloTWxWR3dlU2NIeTFmcENCS01JSl93=w2160-h1952-iv2"),
                            imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYcjFNTGN5WXMybGJSUjBsUmxRXzc5QUJYclc4=w2160-h1952-iv1")
                        ]}
                            enableImageSelection={false}
                            showLightboxThumbnails={true} />
                    </div>
                </Col>
                <Col md={6} sm={12} className="right event">
                    
                    <div className="heart"><img src={`/assets/images/heart.png`} /></div>
                    <div className="des">
                    <h2>Buổi đi chơi đầu tiên</h2>
                    <h3>06-06-2013</h3>
                        Sau khoảng thời gian nhắn tin, tìm hiểu, chúng tôi cùng lên kế hoạch đi chơi chung với nhau, từ đây, chúng tôi nhận ra tình cảm thực sự dành cho nhau.
                    </div>
                </Col>
            </Row>

            <Row className="story-item">
                <Col md={6} sm={12} className="left event">
                    <div className="heart"><img src={`/assets/images/heart.png`} /></div>
                    <div className="des">
                    <h2>Yêu xa</h2>
                    <h3>14-09-2014</h3>
                        Đây là khoảng thời gian chúng tôi xa cách nhau, bắt đầu cho những sự khó khăn, ngăn cách, tuy nhiên, với sự tin tưởng, yêu thương dành cho nhau, chúng tôi đã vượt qua tất cả.    
                    </div>
                </Col>
                <Col md={6} sm={12} className="right image">
                    <div style={{ width: "100%", height: "100%" }}>
                        <Gallery images={[
                            imageSrc("https://lh3.googleusercontent.com/-fUNW9ldzPKoga273rX5cyBT1u0R3l2Dvlu9BCDHa1Qt8CD7SjaPwh5q8c5J8h8FvHStYCQYWzynsd36mwwkZ-EEZWdf0X3XaMb-_bMo62HJBqp6rHrKYyc7K9kqk_pLUT02F4VLGSdaq8I7jxZy-thgXqjYI9KCMNNyQcfQ9UDRbmeB6J7LWw80pPeyHpZxXziqsWkmBK1Cq3lQnHQ3crkdQhOGRYB5o1bpJBJroMPXekB1MUpxDKTKhQy8iH-kSyiaB3-u9EuUswxhIOwDvetpLXXPmvbYKnivfexFZbOu8u1qr6V89HnOiK5REGaDRczLVaURf9YIJQc9MA4fjbXth-r87kUTkBzXQvpZJ-dzh1TrAIOh02nSjcNULwSwj8L3AjzDfgGsdd4_3DpD3-ZvDsALSVFsVUVt9VXRy2kDM8JIfWBmdw_gQfvHw14uKrrnPYbmBZH0Q1s_jLMIyj2Xffnh38X9lO5QAXjIgdIt4j_YVIYTOly-pKBH86PzwykB55_SOXyLKPcgcEr_nqRJD6k7nUJ7MupyP95LHQoJg993_zmjHDxU89bT7i0Ph0xV05mAvRDPwWHLR8g4idpqoE2NVCuqXgSNooM=w1018-h1814-no"),
                            imageSrc("https://lh3.googleusercontent.com/ff6UWx24FCrToNtJDeU-qDllpopLs27dy5RKMVsUySDfzI25RglhqfV3WTQg0-aKrLtEae8AIRIn1ru-t7R29osIWIEn-uSL4pLgwN1oskk-0LbLTtLsCHhU4IcZnXjwUChZLel8cTcJhtdvdtMILYZNcjjWvSPTN2Y5D6gIxwOPhYKzo6uELwh_IZRcf2EjjAUHV4-4p6nJqX8KGPzSOQu0__3wwNPneBZ2WF9bBoSS8_xwWXOK5g5k1f8yBKufhDGAiLFSGMSDZi3hPdvCvzPF5p6t9epc57YBIIxAWcrToykfCBBI_f20LPFodyWhLmP9jPoKdrFScMg0-FXXyj-iay5k_tQi5oJLicpWx45VX2VD1nFygxKIgcLsfy5ekmhAZMu5E5ZUTldAShB-hkVWkz8sC-qv8SmwZGlvjHQMl0q1yoYel7gxtSJi9e5I0cpOKzWgj7vxmS6My6bm4doU9QZrRFqejhsCLehwowS3VNur1a1nlJNZnVQZXDlXEhG7dRKc4kDp_hQAhs-KN9JGFZpSpeA_JXbXtk4BmF88hsE5k9upPfx07FpUOe7Tfwu4OXMpsjdq49bKH8bwFzhv71QFTyeYu-G8esg=w1814-h1018-no"),
                            imageSrc("https://lh3.googleusercontent.com/FPFJM-9XHIYxRkqL5C2pOTN9AiNrwK0lSHFbhUKRd_2COwqo1FrGST0o9uihBdfRjKLW714zYsCgBcnm2QSsQ0qzr4bqYFDKZ4SOT7ekpzTBY-mF2oy00UrojKJy1iJXw1LoXUa9NGAuXCZ2b4iI7dx9y_bg_sGS3EWhipk1jAp1VJk9gbX0zpcgFAw83h7BDZaS4kXPAnkjTmz3Bo0W2FQ2r-yoHXwHRC_4NDiZMTaSZXDCsMfeyoF0GErVqO6566zv1xSIgFoHpxyHT7YVQuM4CFU1hUfeio_ZAZNpUprCxSp0mZRtWcWkAryGdG2k_Y020qiMBSZZaRKbiM97nO-WLy1a_czKLbf3J5QwRxUjdRvAJdBWSzCxLzxwhNi1f8vRI3DgyZZ5ncGxdeiMl7b8Ke91wPAv4THcjCI8XSgr8FMXOtwve6VuPYzv7iQsYF8wJUCRNPTBvHP6Y7pDUP_qtph3TeKhKMKziKkCtQ8hikvzi6YVx6XDmCecda1sAPKpQIw7zv4UtD2oPT-xssI2yub4eR3a6cBJHh3dVjSqfCiSl7NjZAGxYxmJ9tq-IeF9u6YLCH_3Yfk_Rx4l5in2jAZUZl3L36byYOM=w1814-h1018-no"),
                            imageSrc("https://lh3.googleusercontent.com/b_7iI53PTe4LMEifV4h8-ks-l_3zycXCE0aP0nNf1SAFcB5ItMtBW1xCO6gvejEuaffes_D1yt1vWgRBrWJp8X2VMLH7yHqaeXXtX5JtQ3YcPvajGIisxTyjVeLOwCwlVuVUobIme1H9bXv7ZPHJTNYv_JCcOMjxgfSmFP18fEavBa4OR4C5oliCyS-tQzSun508QJT0JS0KiYvyfKjuebiwb571Ztb_4EDnshrsN-vmBWzzgekEMy0wN3qrsGAzii80bpAz6zGY-vtKzAMh9PJgsYve6dIXO6dAA7wy6jrPLMGcfcRcM7KU1xsMdqTFbd8kEvRoiq2cYX3snVH7tBHiAshPzuL8taV6OrMhuPlaP_mlOLmG87df03m2b1enCWTzqKrpcD4VH-U8gEqJqsnLDW-A1fnRq9YBze2FQEFR3LZ1-f662Tpvykc6Wmj1hKetTeVRmA3lglzaPqCIJc0x0ivBZ4lx1uNwYjaRh73cc_jvAER5fVMhnzTaDyYYrsmjFUZHswSJRLz3HEzCVkVXwpIwctVrYUKaedZgUaBtz5RBpq5JcxSCCzxmmTYerETnK6HXfRGx6WLYmkpcGpxZBbFLp-Mn8VuSIsk=w1018-h1814-no"),
                            imageSrc("https://lh3.googleusercontent.com/7zR-7ovPW6TjTJdNzVe0qeBVfdQV74gRypEbS0G91e_boikDvJDRliVPE7WiqZxpv8ueHdo7N4gYhJ0O4ipOWxVdj4AEaLHYP17RKf8R69vUiphdpmQ1QUfAReWqtmYHKA-g9Y-iFJZw-GYsxOLImF_2EuD-XujYewgZAP-owkyknDOT6i64wtyMWX4cFLuzpoUGGeA7lv4tgSL4SQYeIZVDI5PwkC5EIAplcBWbyOMuEaQpxfWlZQyRbzHsog-GYG1n-qr8hzmeBGWOIr1PUPOC8qkylg12249Nm6X1lXvXYwtmFxaAxGwFkuywI97o6b-MViB7zezkhwePY9xe3RFcC1XKe4hvmOIvPrAh6JGa4dfsKtCso5bDkXbKjB9DWxqeeNKa7bn4_ly8zzeG2F5kaZf-19FIAbz8hXbtFgEEYWMS3NV6T4R4KE4ydCShy87W5GCUeGWKJVPcABx9cUC6zNlp7wyAqB5odbXroQR0KLOGt5Hr5bHokRaSDKPKFvwhgyad9f4F2lnbqwp3ZkoG8yvmz8s7-U1tG1T85qByhvKN7p8iP8Nhxth174SIx9A4U2X4HKFqLr8JQ5CykpqpeOSxjGoZjTMKG2E=w1200-h1600-no"),
                            imageSrc("https://lh3.googleusercontent.com/PCU0mO7rbGvARRNekN0PPtaYS5CJYZdT-eG4wQTPDZah_MI7bk7RWGdPBGYFcq4A_ZhxTnrncXVImTWPvfSYPexlGwe0CKeQ2anpLwjk6HlwEeRKWzf_efIgBw869u1-RPXsFxdIp3EGnnxHrl64LZ08wT7Ju6gmHi7SHBsgP6qN43ET67n--s3fHZfYXBS4JPDBYnmTBQZZzGtvWdKlG21ng4UrDPYwTm4qD3ZNKBwFfcv7sn348Ft09rIZN66GbWgq88mZX-AD2t4LdNLjLiXRlTt5MMJMse0fB6FTmZlYWwCatrqZxPzmd-P0OYoxUrZzLaK_BTLWFZbLV7KH_7G4NNQB9oc_XS7H6vc-EcabW7AJvJsy4f271yvzuELGA-VEcCB5yDCl7ea6rXp-g9yvWobuCSX4A2Xpj0LlD0rZZiNwuBc4FfhtpGP3mtZavZgaI1wqyO8Rh3pLxvlTbUkRF88-4u2Slq5sCLKbycb4vVlvM1mYRpTyDbFOvocYGT23czXdFqa4eW5GzLe1R9GunGq6-ooIfQf8M8jg2Q0Yucx3zWhtS-3jAAURgxKn9ugomcx3f3reD6zLvjtvezo6PftlqQMZ_JtBD9s=w1814-h1018-no"),
                            imageSrc("https://lh3.googleusercontent.com/OlXyFCgviBzHpn2unqXIo644RtLBmR9p2yMMI7jlaHBZ_3hkoJRHinN1w8kSiRCczl8wfU7qf2cxv0OiQxWfkIgjinLFfb3JYrD08qu7L9n-a6UP3PvBuJ-fCMhZq1AIci7ZTw-rG1WX5TIB09EFTnGkp5c0_JwcYYRRpCuzVAO5ena0SM5U4p4UjtebHKSEFKW_tLOVH76OSubKvgJt4Rt-h9DtPStetiHJOLX1eD80w-PNGWl9hLTed7QDhS2JVae9pSZARhb2v06Oel6GCnnBsbwdaOzSo6NsE5_5n4LnKEPh4V6SdHMEH_IkFv27RKs0SKOmYgO9f4JxSbu_TeGwf5vC7dBOQxQUrfENQYc6Zs_m4ChPimlxaELEtPZProyvysgdSH0WCwTHgGhCPRAyuFEFtXDjNYHet0GN5myemjVn6asQ3GP089BLGGRbcJUkbrV6thEZeGKlNINgW_ljWon8VI-vMJp_Z510kn0j46HEcLdP34HoTVBJGx6Cl0N1i0n9DqO4Zw80JlfYysvdV8J0_-WLir52JhfTUkn-QJtIG4WMjiDQqJIhwGN09d8LzFRTgILaHm9VtejgUa3xAMTWPDM3QCOa8aI=w1018-h1814-no"),


                        ]}
                            enableImageSelection={false}
                            showLightboxThumbnails={true} />
                    </div>
                </Col>
            </Row>

            <Row className="story-item">
                <Col md={6} sm={12} className="left image">
                    
                </Col>
                <Col md={6} sm={12} className="right event">
                    <div className="heart"><img src={`/assets/images/heart.png`} /></div>
                    <div className="des">
                    <h2>Chia cách</h2>
                    <h3>02-02-2017</h3>
                        Tuy vẫn còn tình cảm cho nhau, nhưng cái tôi của chúng tôi quá lớn, chúng tôi đã không thông cảm cho nhau, vì vậy chúng tôi đã quyết định chia cách nhau trong một thời gian để suy nghĩ lại tình cảm của mình.
                    </div>
                </Col>
            </Row>

            <Row className="story-item">
                <Col md={6} sm={12} className="left event">
                    <div className="heart"><img src={`/assets/images/heart.png`} /></div>
                    <div className="des">
                    <h2>Yêu lại từ đầu</h2>
                    <h3>01-03-2018</h3>
                        Sau khoảng thời gian hơn 1 năm chia cách, chúng tôi nhận ra mình không thể yêu thêm một ai nữa, do đó chúng tôi quyết định tìm lại nhau, cùng nhau xây lại yêu thương, và kết quả là gì thì các bạn cũng biết rồi đó.   
                    </div>
                </Col>
                <Col md={6} sm={12} className="right image">
                    {/* <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} />
                    <Img src={'http://irsfoundation.com/tf/templates/wedding/lovely-wedding/lovely-wedding/images/couple/img-1.jpg'} >
                        <div className="more">+4</div>
                    </Img> */}
                </Col>
            </Row>
            <Row className="story-item">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", fontSize: "1.5em", color: "orangered" }}>
                    We're writing our love story...
                </div>
            </Row>
        </React.Fragment>
        )
    }
}

class Story extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={1} md={1} sm={1} xs={12}></Col>
                <Col lg={10} md={10} sm={10} xs={12} className="box">
                    <StoryItem />
                </Col>
                <Col lg={1} md={1} sm={1} xs={12}></Col>
            </Row>
        )
    }
}

class Qoute extends React.Component {

    render() {
        return (
            <Parallax
                // blur={{ min: -3, max: 15 }}
                bgImage={this.props.image}
                strength={this.props.strength} >
                <div style={{ height: `${this.props.height}px` }} className="page-section qoute">
                    { this.props.children }
                </div>
            </Parallax>
        )
    }
}
Qoute.defaultProps = {
    height: 400,
    strength: 1000,
    image: "../assets/images/bg-3.jpg"
}

class Event extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={1} md={1} sm={1} xs={12}></Col>
                <Col lg={10} md={10} sm={10} xs={12}>
                    <Row className="event-row">
                        <Col md={4} sm={12}>
                            <img src="/assets/images/church.jpg" />
                        </Col>

                        <Col md={8} sm={12}>
                            <h2>Lễ cưới</h2>
                            <div className="flex-row"> 
                                <img src="/assets/images/placeholder.png" style={{}}/>
                                <span>
                                    Nhà thờ GX Thiên Long, Bàu Cạn, Long Thành, Đồng Nai
                                    <a href="https://www.google.com/maps/search/?api=1&query=10.737489,107.126882">(Chạm để mở địa chỉ trong ứng dụng)</a>
                                </span>
                            </div>
                            <div className="flex-row">
                                <img src="/assets/images/time.png" style={{ width: "16px", height: "16px" }} />
                                16:00 chiều, 03-08-2018
                            </div>
                        </Col>
                    </Row>
                    <div className="sep"><div></div></div>
                    <Row className="event-row">
                        <Col md={4} sm={12}>
                            <img src="/assets/images/cake.jpg" />
                        </Col>

                        <Col md={8} sm={12}>
                            <h2>Tiệc cưới - Nhà gái</h2>
                            <div className="flex-row"> 
                                <img src="/assets/images/placeholder.png" style={{}}/>
                                <span>
                                    Tư gia Ấp 2, Bàu Cạn, Long Thành, Đồng Nai
                                    <a href="https://www.google.com/maps/search/?api=1&query=10.724237,107.051764">(Chạm để mở địa chỉ trong ứng dụng)</a>
                                </span>
                            </div>
                            <div className="flex-row">
                                <img src="/assets/images/time.png" style={{ width: "16px", height: "16px" }} />
                                11:00 sáng, 04-08-2018
                            </div>
                        </Col>
                    </Row>
                    <div className="sep"><div></div></div>
                    <Row className="event-row">
                        <Col md={4} sm={12}>
                            <img src="http://marttinfisher.com/themes/bodas/img/gallery/gallery-image-02.jpg" />
                        </Col>

                        <Col md={8} sm={12}>
                            <h2>Tiệc cưới - Nhà trai</h2>
                            <div className="flex-row"> 
                                <img src="/assets/images/placeholder.png" style={{}}/>
                                <span>
                                    Tư gia Ấp 8, Bàu Cạn, Long Thành, Đồng Nai
                                    <a href="https://www.google.com/maps/search/?api=1&query=10.729218,107.138925">(Chạm để mở địa chỉ trong ứng dụng)</a>
                                </span>
                            </div>
                            <div className="flex-row">
                                <img src="/assets/images/time.png" style={{ width: "16px", height: "16px" }} />
                                11:00 sáng, 05-08-2018
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1} md={1} sm={1} xs={12}></Col>
            </Row>
        )
    }
}

const MapAnchor = ({ lat, lng, text }) => {
    return (
        <div className="map-anchor" >
            <div>{text}</div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}  target="_blannk" 
            style={{ fontSize: "0.8em", fontStyle: "italic" }}>(Chạm để mở trong ứng dụng)</a>
        </div>
    )
}

class Maps extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            center: props.center,
            zoom: props.zoom
        }
    }
    toggle(i) {
        if(i == 1) {
            this.brides.checked = true
            this.grooms.checked = false
            this.setState({
                center: { lat: 10.724237, lng: 107.051764 },
                zoom: this.props.zoom
            })
        } else {
            this.brides.checked = false
            this.grooms.checked = true
            this.setState({
                center: {
                    lat: 10.729218,
                    lng: 107.138925
                },
                zoom: this.props.zoom
            })
        }
    }

    render() {
        return (
            <div className="map-center">
                <div className="chooser">
                <Label check onClick={e => this.toggle(1)}>
                    <Input type="checkbox" defaultChecked={true} id="checkbox1" innerRef={n => this.brides = n} />{' '}
                    Nhà gái
                </Label>
                <Label check onClick={e => this.toggle(2)}>
                    <Input type="checkbox" id="checkbox2" innerRef={ n => this.grooms = n }/>{' '}
                    Nhà trai
                </Label>
                </div>
                <div className="map-wrapper">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBvdvLFT1cxTZRLQUzluz1R6-NozWpdjk4" }}
                    center={this.state.center}
                    zoom={this.state.zoom}>
                    {
                        this.props.location.map( (e, i) => {
                            return (
                                <MapAnchor
                                    key={i}
                                    lat={e.loc.lat}
                                    lng={e.loc.lng}
                                    text={e.text} />
                            )
                        })
                    }
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

class ImageGal extends React.Component {

    render() {
        return (
            <div style={{ display: "table", padding: "10px 40px" }}>
                <div className="gal-title">
                    06, tháng 6, 2014 <span>Vũng tàu</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYOW1kT19naHNSSjMydWJBZWFYMk9yT2plRktJ=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZ01KSlp4Q1hFVmtxb2RuVDBNMVRDcGJHOVFz=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYUWJ5SWgyZlFOa1hLU3pKaVdOTkZzbU9ndmdz=w2160-h1952-iv2"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYV251Q2Y5LUxmTHhIaHpwdFRTdTY2cmt0ajJr=w2160-h1952-iv2"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYcDNoOUExVm1KOWcxTEN3ekdpRFg5S0Ixa1VR=w2160-h1952-iv2"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYcjFNTGN5WXMybGJSUjBsUmxRXzc5QUJYclc4=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYcTc1NHlFdTlGVWxGVTJ1UUYwTFQzb0hZSEZJ=w2160-h1952-iv2"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYa1pmTEszak5TUy02RzhObVRmY2hLa052dExn=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYYnFLMURnVFBvQ3IycEF3VV96ZUJkTlpSVjdz=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYVmRZUFR0YVB2aWdncWc5N1JkckRCeTBRY3Uw=w2160-h1952-iv2"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYQ05HOWNuNDFCT09CcWRzZVFkaUtKMm81RFRB=w2160-h1952-iv1"),

                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>

                <div className="gal-title">
                    27, tháng 7, 2014 <span>Bàu cạn</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZXRwRktvQkN4VkE=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYUlJSWW5YWXpZa1U=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZ2V5RU5pQ043U2s=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZHRQNlUza0N2Sms=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYOG03bU9Nb3FsVUE=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYbGhocS1pUThqTmc=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYekp6dkpRNXdGTFk=w2160-h1952-iv1"),

                        

                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>

                <div className="gal-title">
                    10, tháng 8, 2014 <span>Vũng tàu</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYVW92ZktxZHc0Sms=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZkNpUU5JYkM1NVU=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYci03OUMzUGlKOUk=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYci03OUMzUGlKOUk=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYcUxyTklUNmhOa1U=w2160-h1952-iv1"),
                        imageSrc("https://lh3.google.com/u/3/d/0BzNUYrPhdczYZUludXlLX1JoY2c=w2160-h1952-iv1")
                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>



                <div className="gal-title">
                    27, tháng 2, 2015 <span>Vũng tàu</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.googleusercontent.com/ZVgR4zF5OcNrCjDBm-6VVU6RopAalMtIcm7eeNzbYoyI07g-TFkCaRj3_QH5dQS0K3Zb7VaPEAKNqKFxD_CX0nbLZZofcJzqhRQX1RudgJmF8fDcuFhtDcgUOVbztLz7hUCxOTJF4xvOy3G_uWi7Z0Q62HAw7WaaFQ1NOV3fcKJAxkyqsbA_V6y2i_FMdntQoJ2D_zUxr9yRCWszTVL7YLhSJwuZnHvZG3ctXfZnu2DP2tJm1SQrVZsstS34esyAccoepureun_u8g93ofMSzc-P2taKKTB01a_G8Qf2gc0Bj69G1vV8dHoNmVjLLS4Yy_ODE_vtiSQ9FwLFCdmfh-8kSjSKGINhkbRn3ZLxjW7ghx2zDC_3jwPRhaGED-eiARYTBqvCjMnzitfovJpM1-GGiRAamL2-xM5rPeZCUXtSnHusNnSCVHfdhsQq47gqAph2t9FQYKEJ8aKcUyKrV8zy3aEEpvk3ANZXH9z8hTnXd-HO3wh8w4Izkwjw-NrGDQT-m-1JxaYNBejRYLymrYRPVpsNpCoMdvQXtUH45NnyufhzhZ6VCpnN4Rnh8qjwuz5kHsyUJs7zN5k1WsSjdnaV6yG-uJ4o4Sl9TUM=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/1KxOTKv3n8cTsVZf3KmsLZEA9l9QFB495ayBUXGbbOH91eNl8w6srsBbNsb5SJYGLy3xHwX9qlsa9mTrj58D3bHKBBiof-DVm44fC5oE1gUwBU5ibqDgE9Yy81Pt-vD8t00UYYEobyDNzFxIy8w55_1oMavhj2wJpDWOYSO43VxdH4o8F-0JHUXezlJiNDzwID1XWQ1wpZNHoHNhythVmbB8t_b_AwgCvSAOV38jDcC-FtPzx1LzY84QZxtmrnn31izWCz0SMkl_ndmSS7yWgIn_OiiRHuWOJObG-TK_DW0nNrR6CtqltUXnhoLuP3mV_sECDVM00nJ3a1RWOyrqNUYgTS2QJvrmFPe_6qGOeBFD3sZS5vX5N2b-3BN-6tMUuI2ozb8LulmrURj1qxf2nH14FGmbFzZRrgb58Ty33b8kG2hEz7BwkrTmi6-b1-lvEITog6tYstFhfmmVQwzUmhjpQcCc4pbSd2FKp5IRcXJ4BIKtkr0p7xWbE_xhDMdu4wTjr-iMugmFdGt21rWOzhUZDUYpsxCdcTASR5bPFsUfaJdwLZ3TJ36x7tp2C7uyiJUq6hi4OYg-sCiZ8W4dl2IdqfgV4X7oVM90FG4=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/SkxZQZufXLhWlPD4FfsEvtsQKruI1eA7G_x9BYRWqOqPdOTg6Pi7YUoUvaG0qEJ2THEf_z65a3yaYF2sXu9Zu8ksDbtKtrJlhBXmJAPhnqj35KGao6xh55TtFqebrJBCX0QXj_b2jA7xaS_9tTDKU59z1RtPna4Texwc75P8iFZ-PvV9WgRNhADSxNv3rE0bg4FOvyom0yxV5RuWp4OtFj4nlzZrC9EoVr2a9Ul5Lkq1KxHMeqc9A02E7T7vK_YcZA28k49onMu7ktReuAFRQ56ZCVM-GLeJbNToXlhNK1YmvFC_L22mxSMqRioLzAa2pc2ggYGduYRXj_5SNhpBZp695sEzZVDBwTZ7rT5Y1_ZBviJb6h6BWUOSVDfb9xIEocYAVGlaXGo9rZv8beAY0PGC7pz1N4HtQBEIXbEOIA9d7DJ-f5rMFqK7YWKG5ZnU7jt0u1kFAu4qLF9v1P_csfx7X1NKclp9-Y3lIqFANWD0T_lLBRp6d8y_xI3mWajkg7ug3cJc-NtmNPv24Uh2BjX0ntOp8jKoIxnuUAmQ0zZKu0yNEl37CkXc6eSBsspSUqwaLatpB66xyTNnICjHXZFAxr6LeYzeeZQ-QtE=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/YKwVf7ZE8UBgwjmkCoNGgwHsfZw3XEiEghovuMJqkd-AgSNnv8FyNsL3_CIyIA7BgUYbRXLZSrqX53vGURfj7IbxdmFv-8Gt4aQ06JfnaCCGpUkMs_oGaAjSSFgce4AYI1z1Uu-r7Bnescw9sDT78aOCQk8A_h963S92J7Jv6WF6uRswtxXqClWQP3to0arTUi7REGAoFKtv3T7m6RUaCjL6o5tgPn4lIhzt7-z95hG2N9p0Src0QOx95zj_v7uNCa-ZKvaN9e_4uL5RmGwQ_M8RhFepEcWvtpyPnKrHPPzkb7H6wJAyOncLQSSB8lSB806txmzI6guCiSQygFyB89ctG_ILs5PTi_vUkJMFp34fLfJwomX10EzH6V-t-0_ru38ll1P2hovYB4vTpPhU7bqlivhs-Q7AQ-wOsK3EB3tpLaWQnaM_AIB4cSuBOFATSJk4Z_GLWvpTIU9-3tX1lBXr_p0CNeHyjDp9KmrXAsfE0EWWj64qiMjuYJHuX8Fh7NgHXYAgf73gKTwbn7_kkxpnGShcXG0W8sYH63XUn7t7A7_fcNvwShxczyb1eyJQFm9CbqDrwObWnwmgP-W8rUSEn7JpJxHeMYj71TE=w1200-h1600-no1"),
                        imageSrc("https://lh3.googleusercontent.com/9FoHkhz8g1VzjG0doNsPRkYGZcVdzZ1Qq1cT4_CsH-QibZ5GoBDPUvIrUUtrrAJZrdv4idFH0X9xpUrXMdI8G8dzPBNrfXGCroxzQxcZlHXITMwWdRleC_CzNspUSMxrvv0c16Yu2SCyHNmHzFKnSFhGmlpWjlDwmQ4bbq6KTLtie7yEg_K4d9GC9YkTup54xDGM85G1hq2PWu9reH5cesdaBgsZrzO15uu9hLlQ4jgJRdHwG_R6gQX4SwwN81cS9hyhnneUjGZJcyGkkXpYlyKxA6UISbOCWrMeVBQoJWvg5vGVGeExGz5l9iFwds80A2XIKLya0ZC5kTPewNVoaHR67i0jljQ5q-5BMhGVcnstkN_OKFIDsWWNjvUsJ9cAvjvwHxTNgN4gNXDbSHVmEfvT26XVfsyyu1sSx0udTuRm__RZPuPS8hKh7wCWaAPYQk1N9bx4dB5E_0A-gtmSxhnf05IdlYjQVUSIxt_WdrNEFcCOTzSLLhllpyxQzd33YdhLe9xoqxDBFRLY_m6YRkLwLzkMsOmce3xSL878Hb7O17W4ecxl1L9gT2x3VPSGmRqQqQvcgCWc7jHxAes4dlWlUm7IabZKFJcPiyg=w167-h222-no"),
                        imageSrc("https://lh3.googleusercontent.com/fWBTfgSrNa61ypkjx2jR3NNIYE8wEfX00DYY2MU84itosUDXFV_Zzsy46HzmXPuL0MqE9Qb9iYMUlLYfRHS79J0E7Pvwkp225wh6q0uoitI7dqiVuUYt84TZAeng02ypNbyFcst9soM9X0EJy48LxijqsD2LwCRTayGQocHmt0J9E5J0P5wJbtnv3Vvk98pTw5OlRy4hWw0Wze1BUdC8GfjvVVqg2JVEmtL5DtHaPJbsDAEuUWm4EEmvT5b_g3Zlhuy5e1pToFqYTAuBiC_eKV_89Wvgwrgh--pB4oXimxrd3K2NhiJlBP8KDw1YLo9yMXHTFk1x33lO6Y7Rhy1CXtJLBzzTh4jevzzw8a0ISuUh4Fpuei6rHvSRXS6S-zCb80e5iqUa8g6mcNh3LyygFGuxlR_qH3Hd_JefJZE-ZMQrfyhx0IPnrVyoGznsyrtO6Wqjph1sDd7rfqwfbWnN3pzwYsbKGkAjdGWt3RklqNwwJTfT_N0RBNYG8kpQFzlXq7MGM82JQN-XxAyFQfD_E136rrU0Em7x2Z3RpQXbozxZKsYNjD8WZWLB6QL0HQr9eGObZpivrINfqZNWbVFyCAMDQ08BxiLniiQr0Ns=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/tgO9xvG2MGfEn2EZnSQPMghmMKeZOFR0rMxK7L7Hyrg54fA2KiOytVnjxCAD3WuaR5tlGcSCNro7z0uRTBK21R9rIfSIF-Ryp-p07eq7NF0TQY3icgk-ecVsf4aBCaiJmDzDTFf7OBv3ZWECZoe43_E6Gyq2-53jpr5kVHRnf4umVtjwPEPhm_96sa55Q13DVjYy4-78-Tdae0zBqW692VdDoDs3nkAsoRm-qWO8O95H7RFdRSbN2nsWumqpA1oOw3ExC0-D6CSrm5b7ixDCidORLiAx425BnRqsPY5IAFrz8-_zBR-ZUXzGy5CgCfAFFzW0WONv-nMlGiATvojCfMOQJaOZ6G8yuC9p3n6cbzrgfS9csWREllWPtbXinMalFkfIuHrTtszbqs7EW98myJ5G-Dzo3rkzO658sE-5nsThF70_wnZ8HPecWrj14Qw4lPPmx00KZZh_JXjPZ1Qe1gMSKdUsaxscC0XV-Upz_fHOsrudnYk1NflANfPth9O9aekkh_ffYWt8T2WmkebqG-h7NGFgyFvk7aVQWwd2Elu4Q6XOjZQ40I9J9hZWq05V89kruuBkWRdFS-JfrP3drklQ3OkcFFgfwl5b00Q=w1464-h1952-no"),


                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>

                <div className="gal-title">
                    19, tháng 5, 2015 <span>Vũng tàu</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.googleusercontent.com/lMd3PEIkM6Vkp5MVl1azV2Pu8kP5_rk8dDJ8vmgeC_sdlHXWauCjxN4GYrHEuCf_1sUjrQtlhxAesdfn6C5NCLEh_7b6kPtwG51-LuIDSm6Mu5-hOra6T6Fr--9m_6AKl43EW8fezVG7eeXIj8o5Iyem6ITMJ_byubL0hpFL233b3SxfRyX_YH9LwUZlYk26AX5gY3AZRo3j5zrKZzTDJMUGeRNqCe_uGCWl75J39z6BmGKuIBCt6WukEiALuk5PcfQDdvBWLZzaDN1GyBA4SMTPHfJDxSB9OxIymmis1PAvtvzC9LcFSIhhL6tQyhDCMOtv5Z5QfmMPshD7obd1i0h4xHRzK2l2DYSTzZ9ZdMdJhLZIA4gBO_Dxt-uC1AN9h6D0a9h-iKuG8rpwZoorJSkppLB5DTini8gTLBNuqww9QTpl4ic30Kzp3UJSNgO4cAIeKvTYXVXtjWysfDPH-oY_uBfg5i3rkdrh2gq56GQ94MfbFsDkbxK59LLZknS8Yufi81XYRRE5lNgKTMCyG987UkfOhp5Q2Ss-jc3PUc7W4Ysn4HyiAMFH6vZ6VzDJeg4LekvouYoPTeV8LmIY2rl-8sJs2jxuP_z6VB0=w720-h960-no"),
                        imageSrc("https://lh3.googleusercontent.com/pqMpnTg4EJn05BhkuVxIZ82AXQkQmhvDYGXOFt-iRSFDeFvWjsdjUjymhg9BZkll-bHatXKdSthe0WeWc0WYQ3kcFi19SZR_xt6k4nSTLspSqTv73Npn6Jkm_IpeB7IitYn0woiFRqAyXjWZLDOhZy2J0KuHnTI_t9h3GagegG4R9jNPtS0bMQcp_wj3mGUCysLxPdENRktIzV9qh8jhalpGO--VgHMuJi78ThUKuZpcqm1tAy_pWaQtzM6NMSf2G72SdNSAQAhSCLlJjROI2QN-FjGIzdlsJIBmOwZgV-emPlJFakJyJVn9ZmFzqqXEzmds8q6Py0340WbZHuxU9uuoBq4a_3FUhLAVaxDH-xzJeD7-a8ntgTo7Am62_2UcCu1cXou1Z8k8sxybXukRwpbCv8STP-fDB78v89Blmypqhy_7FVwTvwngmtCnpuTN9Tmk8sNc8_9DK88Ii5jsp_9AjP0EWG_cWlZXXKwliQJUbDLB7Qz-1PA9qOkC_yctbpkoX4x3k7sLDY7IBHQZyYHSLbyOgS6DIuxj5B0y3ZvWqS3QlgFtCFFJHioujnSp7RkMyy0PIfVeCqytGPC9G6l6mrWNBSiaaWFiqnQ=w720-h960-no"),
                        imageSrc("https://lh3.googleusercontent.com/9ftCy_Nmuli4q3zdQk1ZM8NDOsqvfHHOY2jkS1biZao1d2Lerx5oD8HH72IEJY7b4Yd76PLNL8JyyQ9KdkWEqzDpwJibYTNYCLhBHy0Qs2jeTZQZERgMQnd0bTmUBDNm_GaSqo4EdDmh8vrmDWb5vp3-2_jZH9k4a4URBf8oDriho0Bb1qjhRVz28fj1EytBQvlVkfwuajBukwBz6KobteC_ZDc8EM8eWtwDtEsQzH8r7S13MBv73GgfjUoYKYVpSA7VwGq_Vx9X8fZTzAld-mGYq7r5oOsJ8fcat2aKg42cvSy9sY6mT2PcJTN4B9Q7ZY_iNNCkGTN9uI9IRfsggtVtOs96PD9TzOfnH_ed9sQmWnag04zV8OjH0WSkXAIv_of9e5DRRCba22R6cRYtmVEBq0afYpssOwD5OYrh78NH48UjMXK2uFF-BLxIqsV3xOgWIxu8cSBFDUEIr-egxgNnXQSM2TXwbps7nw0Qp3X0kVqKzR8c6gTfRzJ7rr0UI3uoFeGQ2jgcqmVWgZ5KNT2JAp5bVCB3cjWtI9vRHYUqrI4LXSUl60qI0Yoq7RtM4MuKtCDdCxjv3mkTFyx_yWbB84CR67C9VWUDKXI=w720-h960-no"),
                        imageSrc("https://lh3.googleusercontent.com/q5e94NbASXOafo8cLIFo29PHvmuE6pIinAxHrGs9n4yPDYhMiBoInrFhB39vCBGrdzvN78pGLiWKRwMq4SmBigr5CI7GWfsOC2OtV2QQ9yxnerScQF5FpwgZ2OrpxJViI5EEPNgYR2LDdOJtHn4CjVppHA76UYOeaJq6tScysS7Uc4NRI4nN0f3c_fHTlDO_187r7S31PCxpCA_Q-H3pmaeGeM07WwOxOMQkE1yVu80AzCn6QfyiMnsLVkFUnAaDZcA4bFjQ5ub9vuuUo15SUEZ_O4TVbAEn7dZrDX8YdvjvuH0PHjT3AhY8TmVAinehFjlqar9AtRrQpaBi75Dm_hN9CYPrsua6tq34-kzJ2gTKU3FfZ21bLP89JrsjDpzG8rz1bSWXE69omotq9YGqXahexufOioBJ2EBn3TAARAFF4tVKWcQocZ1EqkSvvNnzIth12ZuKEcmWPkvoox052p9zqWWksqsPIg101yyiAR74XFy6UO7Y_0LYtFTD_Q4B6Z_VVlNlGPBUUkqgXLwvZa9r52Xa_xRITeJdmRWB-enHSjyG9eZAmDF66B4yKzqeNncUrTI6or5UtZFr723x64uLgH49aIaNCOVWB7o=w720-h960-no"),
                        imageSrc("https://lh3.googleusercontent.com/wcdCvCounexW5dZ4HLRugWzdqqG4qCIylF-URlKEd_5zO_GQc8sqvS8-Q30DjdelQobbek2LtLOwEx_nsMsqbghdEOuF58A6MyUqoW-SOuPpdmYQTyCVI1nKCtTdj6wt9UxpuEnvey7Ep1uyMFXX8Wps3Ng90hiz-CeRvXHzKI9x-joYgIjAe-lk-Z8Ply0-yBxDXVkfvMJ1wm1Wi8INA9w2akSnBSve8gLbt4j-Riaf7iU42XfMnbNrpVvWVxnFc1kntBv7TFllj-WX7L_h-de3Z_ZAY1AETee9AJ3xEUVF8hNIR5jpFyVjYh3byFI5--mSQBgpHm2qJQtmHgiaiufQD2cj7-vms3mh0oCJxFShOJhJLvTfYI0r68uS167to9nQo7JEixp10IAOr5YDYer0KR4mWIN_PguZmvUPw6VqJ07M1GCFyopI-drRcx5WjDrUUVemPAVJu5AAn-5jwbLQnvJnT9jGKJVRpt2BSrDp4l4DrRANlwg9hGVI-hUqhUzf2qDpj_OyAZiit5H0M-G5h6MZ4qoSkB1_B1L1NbXuBgCdS9gAWA6UeiywiYDQcZzNlVZBssXk4396D65mn5QPxXH7oQebZn1TrdM=w720-h960-no"),

                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>


                <div className="gal-title">
                    30, tháng 10, 2015 <span>Phan Rang - Tháp Chàm</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        imageSrc("https://lh3.googleusercontent.com/JHUMXY2a4a1LihkaeQHoQA_gygemiqEhY_UOKC8chgOWRbmcQfhhDJIuYKhouBD0t2WO-QFh2z5YO-Q71DDHJf5fZDhJGwY5G4qgbwuUqeUVpP_uihGnkSdevHLxaTPqg7V_R9tRilPrqrG-Pd7C01jHjr6R1wV-JzvKBaql8jWcQb83rBbvlAEMDrBCcy3TC-8yqziWThuuR6Ry2d3PmebTry0ydSHCaNpw9bH3OCOY9jcmmyfTix_Ru-yWvOjwUhA5LdIqN7mWf7Fh_zXzDSa9PhoXjIagCw0leqkJRyMqBfTo4RWKrTLZPFiYXIJeEqLukagq7XTIF9XFr7SXyskr-oSPyagQRo6nz157DqlT_UX3eET3CH64qGC0UZAM33S6k-Daz351oZqIQXll_pgZUpDctLflr1u63T3EoYG-uYyFJyZaPUnEYStAGRKuDKnm2TDzf9Cs3eEOodIkbVJ9r0tbaRWKtM8H68zLN3m2g8Rd91KseN22tGxvSERCzpPK0RVM5sROuVK2ObDy3z1yR3l2bD4zGfdITA0RIfiwprbrqhFaKK48v2p4yRVMm086tpqWmVAd9jRltJ9Imacc6cQfxUPJelbr7ms=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/PFsiWJR3O2r1bPM3u-8IgqASrJSBfaimdq6V9ODLJVTO6LkPJfmhR1wmsr-ycVuRDpNC6F_6wNat4AR0ynZdawEAZ3IKQHQgRNR_9LgiuEYvl_qznCmPriEod4PEDQSZUKm5Zde8D4aLDgBHCiJM2e6StsX3y-HL1WLClyJjBL91ak2Ffo8_2F-_5Y1t1bRgbrQ_fqEYa0y9ydYI3RXQxAf7IJkGyHiFmRR97zhOYO7MBCxNYhWhSJXwv5icRpruvA83sm920QkHY4UYXv_flhmu6MlclHGY2UG-xVJw7yXIM6i3o3PYqufwG2IMjm5vvBHYJ4usWPs6cNAfhQhEspKHCTDV2k99J-Nkgqh1MXIQ3gC-J_GP5bfdoCu27Dc_cc5Pqsy8qkhEBYlAXSyrGtkHF5vFPl7JSTTknBJMESAXYdyGPCP2q9uNhtkS2J1Xv8aCBMerY6Qfk9v3-0RyUY4kaWr6lH1dIOLoIvk7cf1K-bXLfbH6jTr_zXzPT0EKbG602RZkUf9eWf3xSkdGO3njxVmWmwt9NmZrkOsiDvX1YlVnAUGGrRF59UX-TfaFJj54WOxpJ8Ww0vtAsMCVnIhJmddFVpCPWw1TuTY=w1600-h1200-no"),
                        imageSrc("https://lh3.googleusercontent.com/BITJblWC8tSgc5C85K3lg30G1-shDkSp3Q7SVX2-w4XsfVw2Gqjg0D49ZxBRaSf_iXuO8ErM1C4uOYhNs0bjDNv2Ntyprp21BiDo_a-wg-THMuB_ckEotgdPd1p6ZGpakVJk3zppxI7Xy7TXypMTAC5xdC-0a_6hkWuyTUmBiQN1-Jc8NlAewZYQ2PGaM4SQXIOqs4QJBwOsMsneSPTSkadmMRfihfgwFRrYVo6g0aVOAg7Ows44b0Ze3u5bCbCBQtCRwu5A3pcS3-QglCGYBOuMFK0-NMWAmxoHNE7NQBEGwJjWPBuPIf7eaJrNQh66Yg07qBHDehyHvOD273kn8r2erS_Zf8I9NfljEX5gTOL-ixdwkV1biHP4Y2imO5cMYixjB6ftJphKhd6jiaCpRpHRzxu4v00NEe2kiMbJ0gi3X5kqTi9L3zRp-dL-AI23ff3fyotrt0RNxX9h0cR9rWCKfX9fJvmtDhWqeoFp0msL6PjkD0ygz1U6D9HgXZNmEQLfpcCngKpSiNuOoSA00RH6SAuPOyDfF__8U4cAARp2E6tQpwavBSUIRKlWgjeqBJ_-xAIB5ruzHuSG2MrqBEu1knQtKQVHURF6izk=w3264-h1836-no"),
                        imageSrc("https://lh3.googleusercontent.com/qEUiawsMnUTX_kUL1XfcRDud9PRYQFKcIamog3S2GArtb3C2nZW0xFwyfmvHpew1JAznJSj19ytCdW4KN7n3IWyIgrFl5fEisNuN2jGZeUmC2CdPwSgKaN5b_D2E-X8bMP6onadKncZf2W-On3yvyl1AujHVPFaRSIit8I9K7Mthn9X9150VUgcm69Ps6oLa2M7IR4gz52dBkliuQ8_baAH4Hu06dtr2gb_9dtyfpLluAC2Cz1GnARdU4au9uc0Q3uMxf3P0ncy_ayaYQJtJSYGcTmPhRqnv7OdHeTNSPmhgr92vHxTc769DBC8rU0U2s91uXzd4mPjZH2BCM2rj1CjHRa9Tdh_g1lE3Wt24gCOUfoifAhqp3GwB1KWrUyLLReGAuRbItG1sIu-MAKwRUyRGgBx15XOlAXVVKM1xVb-qbJLunI3LgtY2ZwANcEUgsMiuQW4AWm43j1b91IvIXGVP6eHjuonvECN8dBdi1Ytv_nFzYO7-BfCSER21N0NpEgQw5TBDtVT6BQp74SExd28H36DL3YVNhOGpk_dWW9BQN9pOhxZm0v2coNd7O--wT3BucL57HWFgigzX7Z5nLnWFuD8x4mINqhIUfzo=w1200-h1600-no"),
                        imageSrc("https://lh3.googleusercontent.com/ApMdUAcCSorZDeaPA2hb_Hls4C4HPGjqxR_v_a_2nbtTqLU43ME5qsUgmgl6s_yqSJ9gKyoXiTf5xksUKCh_6wiijrrZoM2LXVAJzQ_Lg8_h1jhcWXihC4IcvB5PbBdVg4cDjdfNZfinFlsBK_fKSHSG_Bu2f9yd-VcGks6jKPtIzSpW6BjzeTjgUZYCY6zIgQVv5RbjEn3gZvYfDk0MB_ZYS475jORXmkMBx2qDifwP3-Y-z3NyTN_EJmAGCnTOkx80m7z6V4U-NdLIRfsHrfZ_sMGDlUW6RM32puQGAYd9EBbzX7xB5nMs0CYEcnvsqj2o7BNGMxvx2cjQBnRI2knvv3uPq4oOl5Qlx9mrSNpajbqmNPwQRi7LQv3hUTy5xmiqMxLXUDfNz9VriGrwq7T-rsEeJlr2WWg2hKe-lPU_fewesPyeHi2YhRLaFlPEFobhh4RuBa7UJc-O8UTsXQuAcssMVRzjoQfJBephfu_aD7yMgHxX71Pteqgfp35-7AUWfe2aOQBpzKtw2_LLYLjlZAU1vR-7Slbb9BZtY1Ae352praL3TucQAu3YoH8vUK8xscz0ucNCstOyjzd2NEXqY0G2AKEap2kFbZw=w1600-h1200-no"),
                        imageSrc("https://lh3.googleusercontent.com/gT4lkJ7vmzxSBlQvw0ABe_AL7yg6l0DiX-U5DXHz_3duZ4Zqu1fDrRje8guZk4IqjGzRNc7Kin1kqjrmEca7H7KDgA1pQiQPENyHL-Xwj2A8osaKozc0VFjLapFSKBuKCVfvT0PzJtFzYcqC5MdOJg1V3n-Wr21DS5br1LKqmeY3EdS170hBf5RJkSV9qEH3ASt53i_C79JnbUyN4Lb10f-XbjqpstRtbDroHJr2JUpVev1NSXJzERWUFDQ_AF14EY23kk48fgiZ0de5PWSdpQvdfl7-a-D2HL4xJpL1vt6cVovwb-hV6xREnfBcOIultUG4YsIXCRoseE9Q3K19pJ4nl-S-9XVT9HuNL3ZvRR3g4qQ9vUhYZkjnoWReDzHG7bmRVMrjQx4kkNlPI5SwZL4QH5BIAgH0g89HxWxG7x8Pq9ovXglZ1Iko8VYpPf8m1k3zuffM7cZN63UoBu4LyKz2EGMexyLNpFg60m8mikmk5tiNQJf73XNR1fkMH_QHbksfKC4PCJ228RQmYyhKdLXenuDMQECf9TGVzbvaj7Z_SLMUnABk-lizeUcY9g3k7MUQrJJZPAkUghQa4_X_SR4BQ0nMv72NFc2k6U8=w421-h237-no")
                        
                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>

                <div className="gal-title">
                    tháng 7, 2018 <span>Wedding</span>
                </div>
                <div style={{ width: "100%", height: "100%", display: "table" }}>
                    <Gallery images={[
                        
                    ]}
                        enableImageSelection={false}
                        showLightboxThumbnails={true} />
                </div>
            </div>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props)


        this.lastScroll = 0;

    }
    

    render() {
        return (
            <div id="homePage" key="root" ref={n => this.node = n}>
                <div id="welcome" className="imageCarousel" ref={n => this.imageCarosel = n}>
                    <div className="title-over">
                        <div className="wrapper">
                            <div className="overlay"></div>
                            {/* <div className="save-date"> */}
                                <h2 className="save-date">save the date</h2>
                            {/* </div> */}
                            <ul className="name">
                                <li><span>Nhật Tân</span></li>
                                <li className="and">&</li>
                                <li><span>Phượng Hằng</span></li>
                            </ul>
                            <div className="date">Th.8 <span>04 - 05</span> 2018</div>
                            <FlipClock />
                        </div>
                    </div>
                    <HeaderCarousel innerRef={n => this.HeaderCarousel = n} />
                </div>
                <div className="mainPage">
                    <div id="menuNav" ref={n => this.menuNav = n} style={{color: "red"}}>
                        <MenuNav onClick={e => this.onMenuClick(e)}/>
                    </div>

                    <div id="content">
                        <Qoute>Counting the minutes for the big day!</Qoute>
                        <div className="page-section" id="about">

                            <div className="title">Happy <span>Couple</span></div>
                            <About />
                        </div>
                        <div className="page-section" id="story">
                            <div className="title">Our <span>Story</span></div>
                            <Story />
                        </div>
                        <Qoute image="http://marttinfisher.com/themes/bodas/img/bg-2.jpg"
                        height={500} strength={700}>
                            Counting the minutes for the big day!
                        </Qoute>
                        <div className="page-section" id="event">
                            <div className="title">Lịch trình <span>Sự kiện</span></div>
                            <Event />
                        </div>
                        <div className="page-section" id="gallery">
                            <div className="title">Thư viên <span>ảnh</span></div>
                            <ImageGal  />
                        </div>
                        {/* <Qoute>Counting the minutes for the big day!</Qoute> */}
                        <div className="page-section" id="map">
                            <div className="title"><span>Chỉ đường</span></div>
                            <Maps center={{ lat: 10.724237, lng: 107.051764 }} zoom={16} location={location} />
                        </div>
                        <div className="page-section" id="thanks">

                        </div>
                        <Qoute>Thanks you!</Qoute>
                    </div>
                </div>
            </div>
        )
    }

    onMenuClick(e) {
        e.preventDefault();
        let div = $(e.target).attr("href")
        let target = $(div)
        if(target.length > 0) {
            let body = $("html, body");
            body.stop().animate({
                scrollTop: target.offset().top - 30
            }, 600, function() {
                    location.hash = target;
            });
        }

    }

    componentDidMount() {
        let self = this
        $(window).scroll(function(){
            if($(window).scrollTop() > self.imageCarosel.offsetHeight) {
                self.menuNav.classList.add("goToTop")
            } else {
                self.menuNav.classList.remove("goToTop")
            }
        })

        this.imageCarosel.style.height = $(window).height() - 50 + 'px'
        if($(window).scrollTop() > self.imageCarosel.offsetHeight) {
            self.menuNav.classList.add("goToTop")
        } else {
            self.menuNav.classList.remove("goToTop")
        }
    }
    
}

const location = [
    {
        loc: {
            lat: 10.725365, 
            lng: 107.051807
        },
        text: "Ngã tư Nông trường"
    },
    {
        loc: {
            lat: 10.724237,
            lng: 107.051764
        },
        text: "Tiệc cưới - Nhà gái"
    },
    {
        loc: {
            lat: 10.710170,
            lng: 107.006027
        },
        text: "Ngã ba 67"
    },
    {
        loc: {
            lat: 10.729218,
            lng: 107.138925
        },
        text: "Tiệc cưới - Nhà trai"
    },
    {
        loc: {
            lat: 10.737489,
            lng: 107.126882
        },
        text: "Nhà thời GX Thiên Long - Nơi cử hành hôn lễ"
    }
]
