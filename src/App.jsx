import React from "react";
import { Button } from "antd";
import { Layout, Space } from "antd";
import { Divider } from "antd";
import ImageGallery from "./components/ImageGallery";
import TopActionBar from "./components/TopActionBar";

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: "10px",
  backgroundColor: "#fff",
  overflow: "hidden",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#fff",
};
export default function App() {
  return (
    <Layout style={layoutStyle} className="container max-w-7xl mx-auto">
      <header className="px-10 border-b">
        <TopActionBar />
      </header>
      <Content style={contentStyle} className="px-10 py-5">
        <ImageGallery />
      </Content>
    </Layout>
  );
}
