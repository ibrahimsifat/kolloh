import React from "react";

interface ErrorProps {
  errorName?: string;
}
const Error: React.FC<ErrorProps> = ({ errorName }) => {
  return (
    <>
      {errorName && (
        <span className="text-red-400 text-sm mt-2">{errorName}</span>
      )}
    </>
  );
};

export default Error;
