import Time from "@/components/atoms/Time/Time";

import { OptionButton } from "@/components/atoms/Button";
import LikeButton from "@/components/atoms/Button/LikeButton";
import ReplayBtn from "@/components/atoms/Button/ReplayBtn";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import CommentForm from "./CommentForm";

const CommentList = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <Text size="lg" weight="bold">
              Discussion (20)
            </Text>
          </div>
          <CommentForm />
          <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <SingleComment />
          </article>

          {/* replay */}
          <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
            <SingleComment />
          </article>
          <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"></article>
        </div>
      </section>
    </>
  );
};

export default CommentList;
const SingleComment = () => {
  return (
    <>
      <footer className="flex justify-between items-center mb-2">
        <CommentUserProfile />
        <OptionButton />
        {/* <!-- Dropdown menu --> */}
      </footer>

      <Text color="textLight">Much appreciated! Glad you liked it ☺️</Text>

      <div className="flex items-center mt-4 space-x-4">
        <LikeButton /> <ReplayBtn />
      </div>
    </>
  );
};

const CommentHandleOperation = () => {
  return (
    <div
      id="dropdownComment2"
      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Edit
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Remove
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Report
          </a>
        </li>
      </ul>
    </div>
  );
};

const CommentUserProfile = () => {
  return (
    <div className="flex items-center">
      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <Image
          width={200}
          height={200}
          className="mr-2 w-6 h-6 rounded-full"
          src="/images/property/1.jpg"
          alt="Michael Gough"
        />
        Michael Gough
      </div>

      <Time title="Comment Date" date={new Date()} />
    </div>
  );
};
