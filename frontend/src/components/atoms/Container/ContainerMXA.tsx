interface ContainerMXAProps {
  children: React.ReactNode;
}

const ContainerMXA: React.FC<ContainerMXAProps> = ({ children }) => {
  return <div className="container mx-auto px-6 sm:px-10">{children}</div>;
};
export default ContainerMXA;
