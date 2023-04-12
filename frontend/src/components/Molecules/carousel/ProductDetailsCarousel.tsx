import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";

//internal import
interface ProductDetailsCarousel {
  children: React.ReactNode;
}
const ProductDetailsCarousel: React.FC<ProductDetailsCarousel> = ({
  children,
}) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation={true}
        allowTouchMove={true}
        // slideClass="bg-red-100"

        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          614: {
            width: 414,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          860: {
            width: 660,
            slidesPerView: 4,
          },
        }}
        className="mySwiper category-slider "
      >
        <>{children}</>
      </Swiper>
    </>
  );
};

export default React.memo(ProductDetailsCarousel);
