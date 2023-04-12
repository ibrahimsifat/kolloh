import ItemsCard from "@/components/Molecules/itemsCard/ItemsCard";
import { SectionContainer } from "@/components/atoms/Container";
import Headline from "@/components/atoms/Headline/Headline";
import { ctaCardData } from "@/utils/data";
import { SwiperSlide } from "swiper/react";
import CardCarousel from "../../../Molecules/carousel/CardCarousel";

const NewItems = () => {
  const array = Array(10).fill("hello");
  return (
    <SectionContainer>
      <Headline
        heading="New Products"
        description="This is New product section you can buy from here also"
      />
      <CardCarousel>
        {ctaCardData?.map((category, i) => (
          <SwiperSlide key={i + 1} className="group">
            <ItemsCard category={category} />
          </SwiperSlide>
        ))}
      </CardCarousel>
    </SectionContainer>
  );
};
export default NewItems;
// interface CourseProps {
//   item: {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     image: string;
//   };
// }
