import React from 'react'
import Style from "../style/main.module.css";
import image1 from "../image /image1.jpeg";
import image2 from "../image /image2.jpeg";
import image3 from "../image /image3.jpeg";
import image4 from "../image /image4.jpeg";
import image5 from "../image /image5.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-bootstrap";

const Home = () => {
    return (
      <div className={Style.main}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <a className={Style.button} href="/">
                Buy Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <a className={Style.button} href="/">
                Buy Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <a className={Style.button} href="/">
                Buy Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image4} alt="Third slide" />
            <Carousel.Caption>
              <a className={Style.button} href="/">
                Buy Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image5} alt="Third slide" />
            <Carousel.Caption>
              <a className={Style.button} href="/">
                Buy Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Home
