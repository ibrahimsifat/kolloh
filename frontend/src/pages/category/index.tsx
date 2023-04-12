import { ContainerMXA, SectionContainer } from "@/components/atoms/Container";

import Layout from "@/components/layout/Layout";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Playground } from "./filters/Sidebar";

const Category = () => {
  return (
    <ProSidebarProvider>
      <Layout>
        <SectionContainer>
          <ContainerMXA>
            <Playground />
          </ContainerMXA>
        </SectionContainer>
      </Layout>
    </ProSidebarProvider>
  );
};
export default Category;
