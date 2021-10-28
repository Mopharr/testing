import React from 'react'
import Style from "../style/main.module.css"
import {
  AiFillHome,
  AiFillPhone,
  AiFillMobile,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi"

const Footer = () => {
    return (
      <div className={Style.footerMain}>
        <div className={Style.footerTop}>

          <div className={Style.footerName}>
            <h2>The Snake Family</h2>
            <p>
              Have you been wanting to get your own Ball Python or wanting to
              see one, The Snake Family is the best you can think of and puchase
              your Ball Python
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
          <div className = {Style.copywrite}>
            <AiOutlineCopyrightCircle /><span>CopyWrite 2021</span>
          </div>
        </div>
      </div>
    );
}

export default Footer
