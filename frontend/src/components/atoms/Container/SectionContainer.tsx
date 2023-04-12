interface SectionContainerProps {
  children: React.ReactNode;
  margin?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  margin = "md:py-8 py-6",
}) => {
  return <div className={`relative overflow-hidden ${margin}`}>{children}</div>;
};
export default SectionContainer;
