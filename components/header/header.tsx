import { FC } from "react";
import { Layout, Menu } from "antd";
import Link from 'next/link';

const { Header } = Layout;

export const HeaderComponent: FC = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
              <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
              <Link href="/user">
                  User
              </Link>
          </Menu.Item>
          <Menu.Item key="3">
              <Link href="/about">About Us</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
