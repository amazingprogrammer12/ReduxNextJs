import * as React from "react";
import type { NextPage } from "next";
import { LayoutPage } from "../components/layout/layout";
import styles from "../styles/Home.module.css";

const AboutPage: NextPage = () => {
  const about = (
    <div>
      <h2>About this app</h2>
    </div>
  );
  return <LayoutPage title="About us">{about}</LayoutPage>;
};
export default AboutPage;
