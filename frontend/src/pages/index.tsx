import AddItemCard from "@/components/Molecules/ItemAddCard/AddItemCard";
import Hero from "@/components/Organisms/HomePage/Hero/Hero";
import HomeCategory from "@/components/Organisms/HomePage/HomeCategory/HomeCategory";
import PopularItems from "@/components/Organisms/HomePage/PopularItems/PopularItems";
import SubscribeForm from "@/components/Organisms/HomePage/Subscribe/SubscribeForm";
import TopBrands from "@/components/Organisms/HomePage/TopBrands/TopBrands";
import TopViewedCategory from "@/components/Organisms/HomePage/TopViewedCategory/TopViewedCategory";
import NewItems from "@/components/Organisms/HomePage/newItems/NewItems";
import { ContainerMXA } from "@/components/atoms/Container";
import Layout from "@/components/layout/Layout";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <ContainerMXA>
        <Hero />
        <HomeCategory />
        <PopularItems />
        <NewItems />
        <AddItemCard />
        <TopViewedCategory />
        <TopBrands />
        <SubscribeForm />
      </ContainerMXA>
    </Layout>
  );
}
