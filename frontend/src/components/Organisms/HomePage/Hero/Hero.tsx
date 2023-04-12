import SearchBar from "@/components/Molecules/SearchBar/SearchBar";
import { ContainerMXA } from "@/components/atoms/Container";
import Text from "@/components/atoms/Text/Text";
import Link from "next/link";
import React from "react";

export interface IHeroProps {}

const Hero: React.FC = () => {
  return (
    <section className="relative table w-full py-16 lg:py-20 bg-gradient-to-br to-secondary/20 via-primary/20 from-primary/20">
      <ContainerMXA>
        <div className="grid grid-cols-1 justify-center text-center">
          <div className="">
            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-darkPrimary to-primary">
              All Your Need Here
            </h1>
            <p className="md:text-md  max-w-xl mx-auto text-lime-800">
              Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae
              ipsam maiores nam sit blanditiis, quisquam expedita?
            </p>

            <div className="mt-6 mb-3">
              <SearchBar />
            </div>

            <Text>
              Looking for help?
              <Link href="" className="text-primary">
                Get in touch with us
              </Link>
            </Text>
          </div>
        </div>
      </ContainerMXA>
    </section>
  );
};
export default Hero;
