import CardCarousel from "@/components/Molecules/carousel/CardCarousel";
import ItemsCard from "@/components/Molecules/itemsCard/ItemsCard";
import { SectionContainer } from "@/components/atoms/Container";
import Headline from "@/components/atoms/Headline/Headline";
import { ctaCardData } from "@/utils/data";
import { SwiperSlide } from "swiper/react";

const RelatedProducts = () => {
  return (
    <SectionContainer>
      <Headline
        heading="Related Products"
        description="This is Related products section you can buy from here also"
      />
      <CardCarousel>
        {ctaCardData?.map((category, i) => (
          <SwiperSlide key={i + 1} className="group">
            <ItemsCard product={category} />
          </SwiperSlide>
        ))}
      </CardCarousel>
    </SectionContainer>
  );
};
export default RelatedProducts;

// interface CourseProps {
//   item: {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     image: string;
//   };
// }
