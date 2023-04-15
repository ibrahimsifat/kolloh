import ItemsCard from "@/components/Molecules/itemsCard/ItemsCard";
import LoadMoreBtn from "@/components/atoms/Button/LoadMoreBtn";
import Typography from "@/components/atoms/Text/Typography";

const FilterProducts = () => {
  const array = Array(10).fill("hello");
  return (
    <div>
      <Typography variant="h4" fontWeight={600}>
        React Pro Sidebar
      </Typography>
      <Typography variant="body2">
        React Pro Sidebar provides a set of components for creating high level
        and customizable side navigation
      </Typography>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center mx-auto mt-4 flex-wrap gap-4">
        {array.map((product, index) => (
          <ItemsCard product={product} key={index} />
        ))}
      </div>
      <LoadMoreBtn />
    </div>
  );
};
export default FilterProducts;
