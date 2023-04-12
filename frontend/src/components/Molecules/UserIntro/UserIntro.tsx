import Avatar from "@/components/atoms/avatar/avatar";

const UserIntro = () => {
  return (
    <div className="flex items-center  w-full flex-wrap justify-start space-x-2 p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md mt-8">
      <Avatar src="/images/property/1.jpg" size="11" />
      <div className="ml-3 rtl:mr-3 flex-1">
        <a href="" className="text-lg font-semibold hover:text-primary ">
          Calvin Carlo
        </a>
        <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
      </div>
    </div>
  );
};
export default UserIntro;
