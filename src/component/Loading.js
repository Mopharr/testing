import React, { useRef, useEffect} from 'react'
// import {GiSandSnake} from 'react-icons/gi'
import image8 from "../image/image8.png";
import Style from "../style/loading.module.css";
import { gsap } from "gsap";


const Loading = () => {
    const imageName = useRef();
    const hide = useRef();

    useEffect(() => {
      gsap.to(imageName.current, { y: "0%" }, 1.5);
      gsap.to(hide.current, { y: "-100%" }, 2);
    }, []);

    return (
      <div ref={hide} className={Style.main}>
        <div className={Style.hide}>
          <img className={Style.image} ref={imageName} src={image8} alt = 'mi'/>
        </div>
      </div>
    );
}

export default Loading
