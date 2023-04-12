import Button from "@/components/atoms/Button/Button";
import { SectionContainer } from "@/components/atoms/Container";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";

const AddItemCard = () => {
  return (
    <>
      <SectionContainer>
        <div className="lg:p-10 p-6 bg-primary shadow-sm border rounded-lg ">
          <div className="w-full bg-white shadow-sm lg:px-7 p-5 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="lg:w-4/6">
                <span className="text-base lg:text-lg">
                  Quality Products and services
                </span>
                <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
                  Quick Delivery to
                  <span className="text-primary"> Your Home</span>
                </h2>
                <Text color="dark">
                  There are many products you will find our shop, Choose your
                  necessary product from our Kollsh shop. See latest products
                  from here and get a special discount.
                </Text>

                <Button bg="primary" text="light" rounded="full">
                  Download App
                </Button>
              </div>
              <div className=" lg:w-2/6">
                <Image
                  width={573}
                  height={200}
                  src="/images/additemcard.svg"
                  alt="app download"
                  className="block w-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default AddItemCard;
