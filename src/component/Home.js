import React from 'react'
import Style from "../style/main.module.css";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpeg";
import image3 from "../image/image3.jpeg";
import image4 from "../image/image4.jpeg";
import image5 from "../image/image5.jpeg";
import image6 from "../image/image6.jpeg";
import image7 from "../image/image7.jpeg";
import {
  AiFillHome,
  AiFillPhone,
  AiFillMobile,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-bootstrap";

const Home = () => {
    return (
      <div className={Style.main}>
        <div className={Style.mainBody}>
          <div className={Style.Navmain}>
            <a href="/">Logo</a>
          </div>
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <Carousel.Caption>
                <a href="/" className={Style.button}>
                  Buy Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />

              <Carousel.Caption className={Style.caption}>
                <a href="/" className={Style.button}>
                  Buy Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              <Carousel.Caption>
                <a href="/" className={Style.button}>
                  Buy Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image4} alt="Third slide" />
              <Carousel.Caption>
                <a href="/" className={Style.button}>
                  Buy Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image5} alt="Third slide" />
              <Carousel.Caption>
                <a href="/" className={Style.button}>
                  Buy Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className={Style.mid}>
            <div className={Style.midCap}>
              <img src={image6} />
              <div className={Style.capText}>
                <p>Ball Python</p>
                <a>Buy Now</a>
              </div>
            </div>
            <div className={Style.midCap}>
              <div className={Style.capText}>
                <p>Check Out </p>
                <a>Buy Now</a>
              </div>
              <img src={image7} />
            </div>
          </div>

          <div className={Style.footerMain}>
            <div className={Style.footerTop}>
              <div className={Style.footerName}>
                <h2>The Snake Family</h2>
                <p>
                  Have you been wanting to get your own Ball Python or wanting
                  to see one, The Snake Family is the best you can think of and
                  puchase your Ball Python
                </p>
              </div>
              <div className={Style.footerContact}>
                <h2>Contact</h2>
                <p>
                  {" "}
                  <AiFillHome /> NewYork, NY 10012, US
                </p>
                <p>
                  {" "}
                  <BiMessageAltDetail /> info@exmaple.com
                </p>
                <p>
                  {" "}
                  <AiFillPhone />
                  +01 234 567 88
                </p>
                <p>
                  {" "}
                  <AiFillMobile />
                  +01 432 765 99
                </p>
              </div>
            </div>
            <div className={Style.copywrite}>
              <AiOutlineCopyrightCircle />
              <span>CopyWrite 2021</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
