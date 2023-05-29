import "../App.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { InstagramEmbed } from 'react-social-media-embed';

import 'swiper/css';
import { visuals } from "./creation-data"
import { visuals2 } from "./creation-data"


function Creation() {
  return (
    <div className="App">
        <div className="Grid-width-wide Center">
        <h1 className="Headline">Visual Stories. 📷 </h1>
         <div className="Round Round2">
        </div> 
        </div>
      <div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Book I - Street Views</h2>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            900: {
              slidesPerView: 2
            },
            /*1024: {
              slidesPerView: 3
            },*/
          }}
        >
          {
            visuals.map((visual) => {
              return(
                <SwiperSlide key={visual.id}><img src={visual.img} alt={visual.img} /></SwiperSlide>
              )
            })
          }
    </Swiper>
      </div>
      <div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Book II - Busy Market</h2>
           <Swiper
          spaceBetween={5}
          slidesPerView={3}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            900: {
              slidesPerView: 2
            },
          }}
        >
          {
            visuals2.map((visual) => {
              return(
                <SwiperSlide key={visual.id}><img src={visual.img} alt={visual.img} /></SwiperSlide>
              )
            })
          }
    </Swiper>
      </div>
      <div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Visual Reels</h2>
        <div className="visual-reels">
          <InstagramEmbed url="https://www.instagram.com/p/Crn5ljFr4r1/" width={328} style={{marginTop: "2rem"}} />
          <InstagramEmbed url="https://www.instagram.com/reel/Cq8L9E5xw7I/" width={328} style={{marginTop: "2rem"}} />
          <InstagramEmbed url="https://www.instagram.com/reel/CpTIOt5jQ7M/" width={328} style={{marginTop: "2rem"}} />
        </div>
      </div> 
      
      <div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">More content coming soon</h2>
      </div>
      {/*<div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Book II - Busy Market</h2>
      </div>*/}
      {/*<img className="phone-mockup" src="/images/phone-mockup.png" alt="phone mockup" />*/}
      {/*<div className="Slide Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Cinematic Film</h2>
        <div className="mockup">
          <div className="mockup-scroll">
            <img className="mockup-img" src="/images/wallp.jpg" alt="wallp" />
            <img className="mockup-img" src="/images/bg-img.jpg" alt="wallp" />
          </div>
        </div>
    </div>*/}
    </div>

  );
}

export default Creation;