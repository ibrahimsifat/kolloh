import CategoryCard from "@/components/Molecules/categoryCard/CategoryCard";
import { GridContainer, SectionContainer } from "@/components/atoms/Container";
import Headline from "@/components/atoms/Headline/Headline";

const TopViewedCategory = () => {
  return (
    <SectionContainer>
      <Headline
        heading="Most Visited Categories"
        description="This is the categories you may need to visit for your needed products"
      />
      <GridContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </GridContainer>
    </SectionContainer>
  );
};
export default TopViewedCategory;
