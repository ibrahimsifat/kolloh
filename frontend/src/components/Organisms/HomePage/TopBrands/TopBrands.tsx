import BrandCard from "@/components/Molecules/BrandCard/BrandCard";
import CardCarousel from "@/components/Molecules/carousel/CardCarousel";
import { SectionContainer } from "@/components/atoms/Container";
import Headline from "@/components/atoms/Headline/Headline";
import { ctaCardData } from "@/utils/data";
import { SwiperSlide } from "swiper/react";

const TopBrands = () => {
  return (
    <SectionContainer>
      <Headline
        heading="Popular Brands"
        description="This are the popular brand for best shopping options"
      />

      <CardCarousel>
        {ctaCardData?.map((brand, i) => (
          <SwiperSlide key={i + 1} className="group">
            <BrandCard brand={brand} index={i} />
          </SwiperSlide>
        ))}
      </CardCarousel>
    </SectionContainer>
  );
};
export default TopBrands;
