import Error from "@/components/atoms/form/Error";
import InputArea from "@/components/atoms/form/InputArea";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

//internal import

const Register = ({
  setShowResetPassword,
  setModalOpen,
}: {
  setModalOpen: true;
  setShowResetPassword: (x: boolean) => void;
}) => {
  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Signing Up</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Create an account with email
        </p>
      </div>
      <form className="flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              label="Name"
              name="name"
              type="text"
              placeholder="Full Name"
              Icon={FiUser}
            />

            <Error errorName={"name error"} />
          </div>

          <div className="form-group">
            <InputArea
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={"email error"} />
          </div>
          <div className="form-group">
            <InputArea
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={"password error"} />
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
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
