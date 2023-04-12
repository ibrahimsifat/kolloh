import styled from "@emotion/styled";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useProSidebar } from "react-pro-sidebar";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, ...rest }) => {
  const { rtl, collapseSidebar, collapsed } = useProSidebar();
  return (
    <StyledSidebarHeader {...rest}>
      <div className="flex justify-end">
        {collapsed ? (
          <FaBars color="#219ebc" size={50} onClick={() => collapseSidebar()} />
        ) : (
          <IoClose
            color="#219ebc"
            size={50}
            onClick={() => collapseSidebar()}
          />
        )}
        {/* <SearchBar /> */}
      </div>
    </StyledSidebarHeader>
  );
};
export default SidebarHeader;
