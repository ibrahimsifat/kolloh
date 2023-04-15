import ProductCard from "@/components/Molecules/ProductCard/ProductDetailsCard";
import BradCrumbs from "@/components/Molecules/breadcrumbs/Bradcrumbs";
import UserComment from "@/components/Organisms/Products/Comments/CommentList";
import RelatedProducts from "@/components/Organisms/Products/RelatedProducts/RelatedProducts";
import { ContainerMXA } from "@/components/atoms/Container";
import Layout from "@/components/layout/Layout";

const Products = () => {
  return (
    <Layout>
      <ContainerMXA>
        <BradCrumbs />
        <ProductCard />;
        <UserComment />
        <RelatedProducts />
      </ContainerMXA>
    </Layout>
  );
};
export default Products;
