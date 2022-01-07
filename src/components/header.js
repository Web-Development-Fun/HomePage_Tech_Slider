import "../App.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  function toggle1() {
    var x = document.getElementById("div1");
    var y = document.getElementById("div2");
    var z = document.getElementById("div3");

    if (x.Style.display === "block") {
      y.Style.display = "none";
      z.Style.display = "none";
      x.style.display="block"
    } else if (y.Style.display === "block") {
      x.Style.display = "none";
      z.Style.display = "none";
      y.style.display="block"
    } else {
      x.Style.display = "none";
      y.Style.display = "none";
      z.style.display="block"
    }
  }



  return (
    <div className="Header">
      <nav className={navbar ? "main-nav active" : "main-nav"}>
        <div className="logo">
          <h2>
            <span Style="font-size: 6rem;">T</span>ECHNORIZEN
          </h2>
        </div>

        <div className={toggle ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="/#">WORK</a>
            </li>
            <li>
              <a href="/#">EXPERTISE</a>
            </li>
            <li className="active">
              <a
                id="menuv3"
                href="javascript:;"
                onclick
                aria-haspopup="true"
                aria-expanded="false"
                title="PROCESS"
                data-target="#secConnect"
              >
                PROCESS
              </a>
            </li>
            <li>
              <a href="/#">AGENCY</a>
            </li>
            <li>
              <a href="/#">RESOURCES</a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <a href="/#" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </a>
        </div>
        <div class="contact">
          <button className="btn">CONTACT</button>
        </div>
      </nav>

      <section id="mid-wrapper">
        <section className="home-banner">
          <div class="fix-wrap">
            <div
              class="banner-cont wow fadeInRight"
              Style="visibility: visible; animation-name: fadeInRight;"
            >
              Big Ideas,
              <br />
              Creative People,
              <br />
              New Technology.
            </div>
          </div>
        </section>
      </section>

      <section class="text-slider">
        <div class="content">
          <div class="slider-wrapper">
            We make Digital(and Magical)....
            <div class="slider1">
              <div class="slider-text1">Experience</div>
              <div class="slider-text2">Product</div>
              <div class="slider-text3">Branding</div>
            </div>
          </div>
        </div>
      </section>

      <div className="tech">
        <div>
          {" "}
          <h2 Style="text-align:center">Our Technology</h2>
          <section class="logo-carousel slider">
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-php.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-python.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-java.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-nodejs.svg"></img>
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-magento.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-umbraco.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-progressistefinity.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-kentico.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-wordpress.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-android.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-angular.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-drupal.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-apple.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-reactjs.svg" />
            </div>
            <div class="slide">
              <img src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/icon-shopify.svg" />
            </div>
          </section>
        </div>
      </div>

      {/* <section id="secConnect" class="connect-sec">
        <div class="fix-wrap">
          <div class="spinx-connect">
            <h3
              data-index="0"
              onClick="toggle1()"
              class="spinx-acco-title current"
            >
              <i class="icn-connect" onclick="toggle1()"></i>Connect
            </h3>
            <div
              id="div1"
              class="spinx-acco-content"
              Style={{ display: "block" }}
            >
              <h4>YOU &amp; SPINX &amp; THE AUDIENCE</h4>
              <p>
                We believe the most effective connections are emotional. People
                know it when they feel it.
              </p>
              <p>
                Our interactive web design agency in Los Angeles helps you
                connect with your audience in exciting and engaging ways. We
                focus on your success by defining your needs and achieving your
                goals.
              </p>
            </div>
            <h3 data-index="1" onClick="toggle1()" class="spinx-acco-title">
              <i class="icn-create" onclick="toggle1()"></i>Create
            </h3>
            <div
              id="div2"
              class="spinx-acco-content"
              Style={{ display: "none" }}
            >
              <h4>INTELLIGENCE &amp; EXPERIENCE</h4>
              <p>
                Our professional Los Angeles web design team collaborates to
                develop the best strategies and inspired solutions for your
                brand.
              </p>{" "}
              <p>
                We leverage intelligence and technology as we create great
                experiences. Just like every brand is unique, every digital
                initiative needs to be a customized approach.
              </p>
            </div>
            <h3 data-index="2" class="spinx-acco-title">
              <i class="icn-evolve" onclick="toggle1()"></i>Evolve
            </h3>
            <div
              id="div3"
              class="spinx-acco-content"
              Style={{ display: "none" }}
            >
              <h4>THE PAST &amp; THE FUTURE</h4>
              <p>
                What matters to us is not just what we’ve done in the past, but
                what we’ll be doing next. We believe in looking towards the
                future with our clients.
              </p>{" "}
              <p>
                Our creative digital agency in Los Angeles creates engaging and
                intuitive website designs to establish your online presence.
                We’ve found brands are like people; they need to breathe, grow
                and evolve.
              </p>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </section>

      <section id="divwhoweare" className="whoweare-sec hp-whoweare">
        <div className="fix-wrap">
          <h2 className="block-title">
            <span>"WHO WE ARE"</span>
          </h2>
          <div className="home-sce-dtl">
            <p>
              We are SPINX Digital in Los Angeles and as innovators in creative
              website design &amp; digital marketing, we build AWESOME digital
              masterpieces. Take a sneak peek at our team, offices, culture,
              philosophy and beliefs.
            </p>
          </div>
        </div>
      </section> */}
      <div></div>
    </div>
  );
}
export default Header;
