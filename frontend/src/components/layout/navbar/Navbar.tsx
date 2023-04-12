import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import dynamic from "next/dynamic";
import Link from "next/link";
import NavbarPromo from "./NavbarPromo";
//internal import

const Navbar = () => {
  return (
    <>
      <div className="bg-primary sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
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
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Button size="md" bg="secondary">
                Create add
              </Button>
              {/* <button
                className="pl-5 text-white text-2xl font-bold"
                aria-label="Login"
              >
                {imageUrl || userInfo?.image ? (
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
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    <FiUser className="w-6 h-6 drop-shadow-xl" />
                  </span>
                )}
              </button> */}
            </div>
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
// export default Navbar;
