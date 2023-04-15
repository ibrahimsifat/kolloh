import Error from "@/components/atoms/form/Error";
import InputArea from "@/components/atoms/form/InputArea";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

//internal import

const ResetPassword = ({
  setModalOpen,
  setShowResetPassword,
}: {
  setModalOpen: true;
  setShowResetPassword: (x: boolean) => void;
}) => {
  return (
    <>
      <div className="text-center mb-6">
        <Link href="/" className="text-3xl font-bold font-serif">
          Forget Password
        </Link>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Reset Your Password
        </p>
      </div>
      <form className="flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              label="Email"
              name="verifyEmail"
              type="email"
              placeholder="Your Register Email"
              Icon={FiMail}
            />
            <Error errorName={"verifyEmail password"} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            Recover password
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;