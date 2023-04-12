import Image from "next/image";
import Link from "next/link";

const FooterTop = () => {
  return (
    <div
      id="downloadApp"
      className="bg-gradient-to-b from-light to-light_primary py-10 lg:py-16 bg-repeat bg-center overflow-hidden border-white md:border-t-4 bottom-2"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
          <div className="flex-grow lg:flex md:flex md:justify-items-center lg:justify-start">
            <Image
              src="/images/shopping_left.svg"
              alt="app download"
              width={400}
              height={394}
              className="block w-auto"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">
              Get Your Daily Needs From Our Kollsh Store
            </h3>

            <div className="mt-8 flex items-center justify-center">
              {/* <Link href="https://www.apple.com/app-store/"> */}
              <Link href="/">
                <Image
                  width={170}
                  height={50}
                  className="mr-2 rounded"
                  src="/images/app/app-store.svg"
                  alt="app store"
                />
              </Link>
              {/* </Link> */}
              {/* <Link href="https://play.google.com/store/apps"> */}
              <a target="_blank" rel="noreferrer">
                <Image
                  width={170}
                  height={50}
                  className="rounded"
                  src="/images/app/play-store.svg"
                  alt="app store"
                />
              </a>
              {/* </Link> */}
            </div>
          </div>
          <div className="md:hidden lg:block">
            <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
              <Image
                src="/images/app_right.svg"
                width={400}
                height={394}
                alt="app download"
                className="block w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
