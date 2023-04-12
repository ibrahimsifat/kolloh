import { ImSpinner3 } from "react-icons/im";
import Button from "./Button";

const LoadMoreBtn = () => {
  return (
    <div className="md:col-span-12 text-center mt-10">
      <Button size="xl">
        <div className="flex items-center justify-between space-x-2">
          <ImSpinner3 size={22} />
          <span> Load More</span>
        </div>
      </Button>
    </div>
  );
};
export default LoadMoreBtn;
