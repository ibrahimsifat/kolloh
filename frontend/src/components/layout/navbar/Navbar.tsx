import LoginModal from "@/components/Molecules/modal/LoginModal";
import Button from "@/components/atoms/Button/Button";
import { ContainerMXA } from "@/components/atoms/Container";
import Text from "@/components/atoms/Text/Text";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import NavbarPromo from "./NavbarPromo";
//internal import

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="bg-primary sticky top-0 z-20">
        <ContainerMXA>
          <div className="top-bar  flex items-center justify-between py-4 mx-auto">
            {/* <Link href="/"> */}
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-12 text-white font-extrabold text-xl"
            >
              {/* <Image
                width={110}
                height={40}
                src="/logo/logo-light.svg"
                alt="logo"
              /> */}
              <Text color="dark" weight="extrabold" size="2xl">
                KOLLSH
              </Text>
            </Link>
            {/* </Link> */}
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0 ">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30"></div>
            </div>
            <div className=" items-center flex absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="hidden sm:block">
                <Button size="md" bg="secondary">
                  Create add
                </Button>
              </div>
              <button
                className="pl-5 text-white text-2xl font-bold"
                aria-label="Login"
              >
                {/* {imageUrl || userInfo?.image ? (
                  <Link href="/user/dashboard">
                    <a className="relative top-1 w-6 h-6">
                      <Image
                        width={29}
                        height={29}
                        src={imageUrl || userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </a>
                  </Link>
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard">
                    <a className="leading-none font-bold font-serif block">
                      {userInfo?.name[0]}
                    </a>
                  </Link>
                ) : ( */}
                <div
                  className="flex items-center justify-center text-sm"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <span>Sign In</span>{" "}
                  <FiUser className="w-6 h-6 drop-shadow-xl" />
                </div>
                {/* )} */}
              </button>
            </div>
          </div>
        </ContainerMXA>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
// export default Navbar;
