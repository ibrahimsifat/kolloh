import Button from "@/components/atoms/Button/Button";
import { SectionContainer } from "@/components/atoms/Container";
import Input from "@/components/atoms/form/Input";
import { BiLock } from "react-icons/bi";

const SubscribeForm = () => {
  return (
    <SectionContainer>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Notified for new Products
          </h2>
        </div>

        <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center space-x-2">
            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
              <Input
                name="subscribe"
                type="text"
                placeholder="info@example.com"
              />
            </div>

            <Button>
              Subscribe
              <svg
                className="w-5 h-5 ml-3 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
          <BiLock />
          <span className="ml-2 text-sm text-gray-600">
            Your data is completely secured with us. We don’t share with anyone.{" "}
          </span>
        </div>
      </div>
    </SectionContainer>
  );
};
export default SubscribeForm;
