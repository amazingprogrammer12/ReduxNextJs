import { FC } from "react";
import { Layout } from "antd";
import Head from "next/head";

import { HeaderComponent } from "../header/header";
import { FooterComponent } from "../footer/footer";

const { Content } = Layout;

type Props = {
  title?: string;
};

export const LayoutPage: FC<Props> = ({
  children,
  title = "Next.JS Redux",
}) => (
  <Layout className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderComponent />
    <Content style={{ minHeight : "100%", minWidth : "100%" }}>
      {children}
    </Content>
    <FooterComponent />
  </Layout>
);
