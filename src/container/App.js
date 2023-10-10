import './App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
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
                  <span className="topic-title">營收報告 / 季合併財報</span>
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
              <p class="title01">王品集團因同仁而精彩，<br />有快樂的同仁，才會有滿意的顧客。</p>
              <p>堅持以人為本，把同仁當成自己的家人一樣尊重、一樣重視、一樣重要，就像一個家庭中的每位成員皆舉足輕重，並產生認同與歸屬感。</p>
            </div>
          </div>
          <div className="fullimg">
            <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_105_29_1648631326_s-slider01.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* news-wrao */}
      <div className="news-wrap">
        <div className="container">
          <ul className="nav-tabs">
            <li className="item">
              <a href="#" className="nav-link active">集團訊息</a>
            </li>
            <li className="item">
              <a href="#" className="nav-link">媒體報導</a>
            </li>
          </ul>
          <div className="tab-content">
            
            <Slider {...settingsTab}>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_883_1694595842_230913_picnic00.jpg" alt="" />
                  <span className="date">2023/09/13</span>
                  <span className="title">【野餐冒險王正式啟動】  探索王品國尋找價值破千寶藏</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_884_1694669838_2023tb.png" alt="" />
                  <span className="date">2023/09/01</span>
                  <span className="title">2023知書答禮｜淘氣接力趣</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_839_1685703665_wowprime_banner_wp_site_650-650_b.jpg" alt="" />
                  <span className="date">2023/06/05</span>
                  <span className="title">王品瘋美食330萬會員慶 【主揪站出來 冠名得大獎】</span>
                </span>
              </a>
              <a href="#">
                <span className='news-span'>
                  <img src="https://www.wowprime.com/images/kkcontent_thumbs/thumb_107_828_1683602208_2023_102bn.jpg" alt="" />
                  <span className="date">2023/05/02</span>
                  <span className="title">2023原燒｜一人衣愛助兒盟</span>
                </span>
              </a>
              
            </Slider>
            
            
          </div>
          <div className="more_articles">
              <a href="#" className="red-btn">更多集團訊息</a>
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
                <p className="title01">傳遞餐桌上的美味關係<br />成為最具影響力的餐飲集團</p>
                <p>創造與提供顧客多元餐飲服務及產品</p>
                <p>時刻傳遞溫度，豐富美好生活</p>
                <p>&nbsp;</p>
                <a href="#" className="red-btn">更多內容</a>
              </div>
              <div className="home-about-right">
                <table className="table-rwd">
                  <tbody>
                    <tr>
                      <td>
                        <div className="item">
                          <div className="counter">
                            30<span>年</span>
                          </div>
                        </div>
                        <p className="desc">成立於1993年</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            323<span>間</span>
                          </div>
                        </div>
                        <p className="desc">台灣直營</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            99<span>間</span>
                          </div>
                        </div>
                        <p className="desc">大陸直營</p>
                      </td>
                      <td>
                        <div className="item">
                          <div className="counter">
                            36<span>個</span>
                          </div>
                        </div>
                        <p className="desc">餐飲品牌</p>
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
            <p className="title02">人才招募</p>
            <p className="title01">夢想的起點 從王品出發</p>
            <ul className="list02">
              <li>薪酬獎勵</li>
              <li>歡慶節日</li>
              <li>新鐵人養成計畫</li>
              <li>安心保障</li>
              <li>王品人專屬享樂</li>
              <li>完整的教育訓練體系</li>
            </ul>
            <a href="#" className="red-btn">更多內容</a>
          </div>
          <div className="hr-img">
            <img src="https://www.wowprime.com/uploads/home/hr.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* home-brands */}
      <div className="home-brands">
        <div className="title">一起吃飯，就是最好的事</div>
        <div className="sub-title">創造與提供顧客多元餐飲服務及產品，時刻傳遞溫度，豐富美好生活。</div>
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
                  <div className="moudle-header">關於王品</div>
                  <ul className="footer-ul">
                    <li><a href="#">企業概況與沿革</a></li>
                    <li><a href="#">經營理念與核心價值觀</a></li>
                    <li><a href="#">聯絡我們</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">美味地圖</div>
                  <ul className="footer-ul">
                    <li><a href="#">品牌發展與版圖</a></li>
                    <li><a href="#">紙本票券專區</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">企業責任</div>
                  <ul className="footer-ul">
                    <li><a href="#">CSR管理</a></li>
                    <li><a href="#">永續治理</a></li>
                    <li><a href="#">綠色採購</a></li>
                    <li><a href="#">安心食品</a></li>
                    <li><a href="#">友善環境</a></li>
                    <li><a href="#">幸福職場</a></li>
                    <li><a href="#">社會共融</a></li>
                    <li><a href="#">CSR報告</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">利害關係人</div>
                  <ul className="footer-ul">
                    <li><a href="#">投資人專區</a></li>
                    <li><a href="#">供應商平台</a></li>
                    <li><a href="#">店鋪租賃處</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">新聞中心</div>
                  <ul className="footer-ul">
                    <li><a href="#">各界肯定</a></li>
                    <li><a href="#">媒體報導</a></li>
                    <li><a href="#">集團訊息</a></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <div className="moudle-header">人工招募</div>
                  <ul className="footer-ul">
                    <li><a href="#">加入王品</a></li>
                    <li><a href="#">同仁專區</a></li>
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
                <a href="#" className="cookie">隱私權政策</a>
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
