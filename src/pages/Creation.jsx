import "../App.css"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
function Creation() {
  return (
    <div className="App">
        <div className="Grid-width-wide Center">
         <h1 className="Headline">Creation. 📷 </h1>
        </div>
      <div className="Full-width Center">
        <h2 className="Subheadline Text-color">Book I</h2>
        <Swiper slidesPerView={4} navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://images.wallpaperscraft.com/image/single/sunset_dark_twilight_148787_2560x1440.jpg" alt="xxx" /></SwiperSlide>
        <SwiperSlide><img src="https://c4.wallpaperflare.com/wallpaper/73/176/1014/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"  alt="xxx"/></SwiperSlide>
        <SwiperSlide><img src="https://c4.wallpaperflare.com/wallpaper/394/673/208/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg" alt="xxx" /></SwiperSlide>
        <SwiperSlide><img src="https://as1.ftcdn.net/v2/jpg/04/81/28/00/1000_F_481280072_Mi2bfrKbZMyzdPEd0dWCqQDt7mWqxR0W.jpg" alt="xxx" /></SwiperSlide>
        <SwiperSlide><img src="https://images.wallpaperscraft.com/image/single/sunset_dark_twilight_148787_2560x1440.jpg"  alt="xxx"/></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Creation;