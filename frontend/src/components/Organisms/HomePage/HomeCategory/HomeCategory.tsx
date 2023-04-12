import HomeCategoryCard from "@/components/Molecules/categoryCard/HomeCategoryCard";
import LoadMoreBtn from "@/components/atoms/Button/LoadMoreBtn";
import { GridContainer, SectionContainer } from "@/components/atoms/Container";
import Headline from "@/components/atoms/Headline/Headline";
const arrayObjects = [
  { id: 1, name: "All", selected: true },
  { id: 2, name: "Branding" },
  { id: 3, name: "Designing" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Development" },
];
export interface IHomeCategoryProps {}
const array = Array(10).fill("hello");
const HomeCategory = () => {
  return (
    <>
      <SectionContainer>
        <Headline
          heading="Featured Categories"
          description="Choose your necessary products from this feature categories."
        />

        <GridContainer>
          {array.map((category, index) => (
            <HomeCategoryCard category={category} key={index} />
          ))}
        </GridContainer>
        <LoadMoreBtn />
      </SectionContainer>
    </>
  );
};
export default HomeCategory;
