import Head from "next/head";
import { ToastContainer } from "react-toastify";

//internal import
import Footer from "./footer/Footer";
import FooterTop from "./footer/FooterTop";
import MobileFooter from "./footer/MobileFooter";
import Navbar from "./navbar/Navbar";

import FeatureCard from "@/components/Molecules/feature-card/FeatureCard";
interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <ToastContainer />
      <div className="font-sans">
        <Head>
          <html lang="en" className="light" dir="ltr" />
          <title>
            {title
              ? `Kollsh | ${title}`
              : "Kollsh -  online marketplace for buying and selling new and used products in Saudi Arabia"}
          </title>
          {description && <meta name="description" content={description} />}
          <link href="/favicon.png" />
        </Head>
        {/* <NavBarTop /> */}
        <Navbar />
        <div>{children}</div>
        <MobileFooter />
        <div className="w-full">
          <FooterTop />
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
