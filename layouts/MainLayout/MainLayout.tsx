import Footer from "$layouts/Footer/Footer";
import Header from "$layouts/Header/Header";
import { FC } from "react";
import { Content, Layout } from "./MainLayout.styles";
import { IMainLayoutProps } from "./MainLayout.types";

const MainLayout: FC<IMainLayoutProps> = ({ activePage, children, search }) => {
  return (
    <Layout>
      <Header searchString={search} activePage={activePage} />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
