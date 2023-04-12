interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-2 md:grid-cols-5 sm:grid-cols-3 justify-center mx-auto mt-4 flex-wrap gap-4">
      {children}
    </div>
  );
};
export default GridContainer;
