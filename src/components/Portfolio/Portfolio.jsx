import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import youtube from "../../img/youtube.png";
import Crowd from "../../img/crowd.png";
import ecommerce from "../../img/eCommerce.png";
import socailmedia from "../../img/socialmedia.png";
import fb from "../../img/fb.png";
import clone from "../../img/clone.png";
import game from "../../img/jsgame.png";
import trello from "../../img/trello.jpeg";
import socail from "../../img/social.png";
import movie from "../../img/movie.png";
import food from "../../img/food.png";
import chart from "../../img/chart.png";
import upwork from "../../img/upwork.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    <>
     <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Front-End</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a target="_blank" href="https://youtube-clone-v3-using-react-aqky.vercel.app/"> <img src={youtube} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a target="_blank" href="https://tranquil-fairy-e92041.netlify.app/"> <img src={socail} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://movie-app-using-react-tau.vercel.app/"> <img src={movie} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="  https://food-order-react-three.vercel.app/"> <img src={food} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href=" https://expenses-with-chart-using-react.vercel.app/"> <img style={{height:"50%"}} src={chart} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href="https://bootstrap-upwork-clone.vercel.app/"> <img style={{height:"50%"}} src={upwork} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href="https://simple-face-book-clone-using-bootstrap-oflg9l1xn.vercel.app/"> <img style={{height:"50%"}} src={fb} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href="https://simple-bootstrap-clone-dkrgi1w8n-kareemmohsenali.vercel.app/"> <img style={{height:"50%"}} src={clone} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href="https://jsgame-mauve.vercel.app/"> <img style={{height:"50%"}} src={game} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
    {/*////////////////////////////////////////////////////////////////////////////// backend */}
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span  style={{color: darkMode?'white': '',display:"none"}}>Recent Projects</span>
      <span>BackEnd</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a target="_blank" href="https://github.com/KareemMohsenAli/E-Commerce"> <img src={ecommerce} alt="" /></a>
          <p > E-commerce</p>
        </SwiperSlide>
        <SwiperSlide>
         <a target="_blank" href="https://github.com/KareemMohsenAli/socialMedia-node.js"> <img height={"50%"} src={socailmedia} alt="" /></a>
         <p > Social Media</p>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://github.com/KareemMohsenAli/Trello-backend-App"> <img height={"50%"}  src={trello} alt="" /></a>
          <p >Trello</p>

        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href=" https://github.com/KareemMohsenAli/Crowd-Funding-Django"> <img src={Crowd} alt="" /></a>
          <p>Crowd-Funding</p>
        </SwiperSlide>
      </Swiper>
    </div>

    {/* fullstack Projects////////////////////////////////////////////////////////////////////////////////////////////////// */}
    {/* <div className="portfolio" id="portfolio">

      <span  style={{color: darkMode?'white': '',display:"none"}}>Recent Projects</span>
      <span>Fullstack</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a target="_blank" href="https://youtube-clone-v3-using-react-aqky.vercel.app/"> <img src={youtube} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a target="_blank" href="https://tranquil-fairy-e92041.netlify.app/"> <img src={socail} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://movie-app-using-react-tau.vercel.app/"> <img src={movie} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="  https://food-order-react-three.vercel.app/"> <img src={food} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href=" https://expenses-with-chart-using-react.vercel.app/"> <img style={{height:"50%"}} src={chart} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a  target="_blank" href="https://bootstrap-upwork-clone.vercel.app/"> <img style={{height:"50%"}} src={upwork} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div> */}
    </>
  );
};

export default Portfolio;
