import { FC, createContext, useMemo, useState } from "react";

interface SidebarContextType {
  cartDrawerOpen: boolean;
  toggleCartDrawer: () => void;
  closeCartDrawer: () => void;
  setCartDrawerOpen: (value: boolean) => void;
  categoryDrawerOpen: boolean;
  toggleCategoryDrawer: () => void;
  closeCategoryDrawer: () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  handleChangePage: (p: number) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  cartDrawerOpen: false,
  toggleCartDrawer: () => {},
  closeCartDrawer: () => {},
  setCartDrawerOpen: (value) => {},
  categoryDrawerOpen: false,
  toggleCategoryDrawer: () => {},
  closeCategoryDrawer: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  closeModal: () => {},
  currentPage: 1,
  setCurrentPage: (value) => {},
  handleChangePage: (p) => {},
  isLoading: true,
  setIsLoading: (value) => {},
});

interface SidebarProviderProps {
  children: JSX.Element;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleCartDrawer = () => setCartDrawerOpen(!cartDrawerOpen);
  const closeCartDrawer = () => setCartDrawerOpen(false);

  const toggleCategoryDrawer = () => setCategoryDrawerOpen(!categoryDrawerOpen);
  const closeCategoryDrawer = () => setCategoryDrawerOpen(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  const handleChangePage = (p: number) => {
    setCurrentPage(p);
  };

  const value = useMemo<SidebarContextType>(
    () => ({
      cartDrawerOpen,
      toggleCartDrawer,
      closeCartDrawer,
      setCartDrawerOpen,
      categoryDrawerOpen,
      toggleCategoryDrawer,
      closeCategoryDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      currentPage,
      setCurrentPage,
      handleChangePage,
      isLoading,
      setIsLoading,
    }),

    [cartDrawerOpen, categoryDrawerOpen, isModalOpen, currentPage, isLoading]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
