interface ContainerMXAProps {
  children: React.ReactNode;
}

const ContainerMXA: React.FC<ContainerMXAProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl sm:px-10 mx-auto px-4 md:px-10">
      {children}
    </div>
  );
};
export default ContainerMXA;
