import { Layout } from "antd";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImageGallery from "./components/ImageGallery";
import TopActionBar from "./components/TopActionBar";
import { TouchBackend } from "react-dnd-touch-backend";

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
        <DndProvider backend={HTML5Backend}>
          <ImageGallery />
        </DndProvider>
      </Content>
    </Layout>
  );
}
