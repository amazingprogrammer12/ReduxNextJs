import { FC } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export const FooterComponent: FC = () => {
  return (
    <Layout>
      <Footer  style={{ textAlign : "center" }}>©2020 NEXT.JS REDUX </Footer>
    </Layout>
  );
};
