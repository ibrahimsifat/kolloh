import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
      <a
        href="assets/images/portfolio/10.jpg"
        className="lightbox transition-all duration-500 group-hover:scale-105"
        title=""
      >
        <Image
          width={400}
          height={400}
          src="/images/property/1.jpg"
          className=""
          alt="work-image"
        />
      </a>
      <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
        <a
          href="portfolio-detail-two.html"
          className="hover:text-indigo-600 text-lg transition duration-500 font-medium"
        >
          Iphone mockup
        </a>
        <h6 className="text-slate-400">Branding</h6>
      </div>
    </div>
  );
};
export default CategoryCard;
