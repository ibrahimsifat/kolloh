import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";

//internal import
interface CardCarousel {
  children: React.ReactNode;
}
const CardCarousel: React.FC<CardCarousel> = ({ children }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        navigation={true}
        allowTouchMove={true}
        // slideClass="bg-red-100"

        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          660: {
            width: 660,
            slidesPerView: 3,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 5,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 5,
          },
          1680: {
            width: 1680,
            slidesPerView: 6,
          },
          1920: {
            width: 1920,
            slidesPerView: 7,
          },
        }}
        className="mySwiper category-slider "
      >
        <>{children}</>
      </Swiper>
    </>
  );
};

export default React.memo(CardCarousel);
