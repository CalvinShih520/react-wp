import './index.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../i18n';
import { useTranslation,Trans } from 'react-i18next';


function App() {
  const {t,i18n} = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settingsTab = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const settingsBrands = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const settingsTopic = {
    dots: true, // 显示轮播点
    infinite: true, // 无限循环
    speed: 500, // 切换速度（毫秒）
    slidesToShow: 1, // 每次显示的幻灯片数量
    slidesToScroll: 1, // 每次滚动的幻灯片数量
  };
  

  return (
    
    <div className="App">
      {/* 大輪播 */}
      <div className="first-slide">
        <Slider {...settings}>
          <div className="wrap">
            <img  className="wrap-img" src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_746_1674034827_30_pc02.jpg" alt="" />
          </div>
          <div className="wrap">
            <img  className="wrap-img" src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_18_1654569662_01.jpg" alt="" />
          </div>
          <div className="wrap">
            <img  className="wrap-img" src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_101_19_1654571388_02.jpg" alt="" />
          </div>
        </Slider>
      </div>

      {/* TOPIC */}
      <div className="home-marquee">
        <div className="fullblock">
          <div className="container">
            <div className="kkcontent-carousel-wrap">
              <div className="topic">TOPIC</div>
              <div className="topic-slide">
                <a href="#">
                  <span className="topic-date">2022.06.21</span>
                  <span className="topic-title">{t("IncomeRepo")}</span>
                </a>
              </div>
              <div className="topic-nav">
                <div className="topicPrev"></div>
                <div className="topicNext"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Introdution */}
      <div className="Introdution-slide">
        <div className="kkcontent row">
          <div className="fulltext">
            <div className="item">
              <div className="title-img">
                <img src="https://www.wowprime.com/templates/cadiis/images/ui/title-img.svg" alt="" />
              </div>
              <p class="title01">{t("IntrodutionA")}<br />{t("IntrodutionB")}</p>
              <p>{t("IntrodutionC")}</p>
            </div>
          </div>
          <div className="fullimg">
            <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_105_29_1648631326_s-slider01.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* news-wrap */}
      <div className="news-wrap">
        <div className="container">
          <ul className="nav-tabs">
            <li className="item">
              <a href="#" className="nav-link active">{t("NewsMsg")}</a>
            </li>
            <li className="item">
              <a href="#" className="nav-link">{t("NewsMda")}</a>
            </li>
          </ul>
          <div className="tab-content">
            
            <Slider {...settingsTab}>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_883_1694595842_230913_picnic00.jpg" alt="" />
                  <span className="date">2023/09/13</span>
                  <span className="title">{t("NewsSlideA")}</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_884_1694669838_2023tb.png" alt="" />
                  <span className="date">2023/09/01</span>
                  <span className="title">{t("NewsSlideB")}</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_839_1685703665_wowprime_banner_wp_site_650-650_b.jpg" alt="" />
                  <span className="date">2023/06/05</span>
                  <span className="title">{t("NewsSlideC")}</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_828_1683602208_2023_102bn.jpg" alt="" />
                  <span className="date">2023/05/02</span>
                  <span className="title">{t("NewsSlideD")}</span>
                </span>
              </a>
              
            </Slider>
            
            
          </div>
          <div className="more_articles">
              <a href="#" className="red-btn">{t("NewsBtn")}</a>
          </div>
        </div>
      </div>

      {/* home about */}
      <div className="home-about">
        <div className="fullblock">
          <div className="container">
            <div className="row">
              <div className="home-about-left">
                <p className="title02">Investor</p>
                <p className="title01">{t("HomeAboutA")}<br />{t("HomeAboutB")}</p>
                <p>{t("HomeAboutC")}</p>
                <p>{t("HomeAboutD")}</p>
                <p>&nbsp;</p>
                <a href="#" className="red-btn">{t("Btn")}</a>
              </div>
              <div className="home-about-right">
                <table className="table-rwd">
                  <tbody>
                    <tr>
                      <td>
                        <div className="item">
                          <div className="counter">
                            30<span>{t("HomeAboutListA")}</span>
                          </div>
                        </div>
                        <p className="desc">{t("HomeAboutListA2")}</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            323<span>{t("HomeAboutListB")}</span>
                          </div>
                        </div>
                        <p className="desc">{t("HomeAboutListB2")}</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            99<span>{t("HomeAboutListC")}</span>
                          </div>
                        </div>
                        <p className="desc">{t("HomeAboutListC2")}</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            36<span>{t("HomeAboutListD")}</span>
                          </div>
                        </div>
                        <p className="desc">{t("HomeAboutListD2")}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* human resource */}
      <div className="home-hr">
        <div className="row">
          <div className="big-title">Human Resource</div>
          <div className="hr-intro">
            <p className="title02">{t("HumanTitleA")}</p>
            <p className="title01">{t("HumanTitleB")}</p>
            <ul className="list02">
              <li>{t("HumanListA")}</li>
              <li>{t("HumanListB")}</li>
              <li>{t("HumanListC")}</li>
              <li>{t("HumanListD")}</li>
              <li>{t("HumanListE")}</li>
              <li>{t("HumanListF")}</li>
            </ul>
            <a href="#" className="red-btn">{t("Btn")}</a>
          </div>
          <div className="hr-img">
            <img src="https://www.wowprime.com/uploads/home/hr.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* home-brands */}
      <div className="home-brands">
        <div className="title">{t("BrandA")}</div>
        <div className="sub-title">{t("BrandB")}</div>
        <div className="home-brands-slide">
          <Slider {...settingsBrands}>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220801153255.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530095140.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020221017110455.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530092716.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513093814.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220530092229.png" alt="" />
            </div>

            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220905103445.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220620145147.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513094346.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513093112.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220513094035.png" alt="" />
            </div>
            <div className="wrap">
              <img  className="wrap-img" src="https://www.wowprime.com/images/cgcustom/img020220720171125.png" alt="" />
            </div>

            
          </Slider>
        </div>
      </div>

      {/* footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-left">
              <img src="https://www.wowprime.com/templates/cadiis/images/ui/logo-w.svg" alt="" />
            </div>
            <div className="footer-right">
              <div className="row">
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleA")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListA1")}</a></li>
                    <li><a href="#">{t("FooterListA2")}</a></li>
                    <li><a href="#">{t("FooterListA3")}</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleB")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListB1")}</a></li>
                    <li><a href="#">{t("FooterListB2")}</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleC")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListC1")}</a></li>
                    <li><a href="#">{t("FooterListC2")}</a></li>
                    <li><a href="#">{t("FooterListC3")}</a></li>
                    <li><a href="#">{t("FooterListC4")}</a></li>
                    <li><a href="#">{t("FooterListC5")}</a></li>
                    <li><a href="#">{t("FooterListC6")}</a></li>
                    <li><a href="#">{t("FooterListC7")}</a></li>
                    <li><a href="#">{t("FooterListC8")}</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleD")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListD1")}</a></li>
                    <li><a href="#">{t("FooterListD2")}</a></li>
                    <li><a href="#">{t("FooterListD3")}</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleE")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListE1")}</a></li>
                    <li><a href="#">{t("FooterListE2")}</a></li>
                    <li><a href="#">{t("FooterListE3")}</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">{t("FooterTitleF")}</div>
                  <ul className="footer-ul">
                    <li><a href="#">{t("FooterListF1")}</a></li>
                    <li><a href="#">{t("FooterListF2")}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="wrap">
              <p>
                <a href="#" className="cookie">{t("Privacy")}</a>
              </p>
              <p>版權所有© Wowprime.Corp. All rights reserved.</p>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;
              <a href="#">
                <img src="https://www.wowprime.com/uploads/home/fb.svg" alt="" className='mr15' />
              </a>
              <a href="#">
                <img src="https://www.wowprime.com/uploads/home/yt.svg" alt="" className='mr15' />
              </a>
              <a href="#">
                <img src="https://www.wowprime.com/uploads/home/wowfoods.svg" alt="" />
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
