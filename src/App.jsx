import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../routes";
import { getToken } from "./utils/constants";
import { Layout, theme } from "antd";
import "./App.css";
import AppSidebar from "./components/appSidebar/AppSidebar";
import AppHeader from "./components/appHeader/AppHeader";
import { useGlobalInfo } from "./contexts/GlobalContext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ShareConversationPublic from "./components/ShareConversationPublic/ShareConversationPublic";
import ShareStep from "./components/ShareStep/ShareStep";
import AddNewContactButton from "./components/AddNewContact/AddNewContactButton";

const DefaultLayout = ({ children }) => {
  const { module, setModule } = useGlobalInfo();
  // const loading = useStore((state) => state.loading);
  // const { loading } = useGlobalInfo();

  const { Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // useEffect(()=>{
  //   console.log('------loadig ----------',loading)
  //  },[loading])
  return (
    <>
      {/* {loading ? (
        <GlobalLoaderCopy />
      ) : ( */}
      <Layout>
        <AppSidebar module={module} setModule={setModule} />
        <Layout
          className="site-layout flex-auto md:ml-[80px] max-md:ml-0"
          style={{
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          <AppHeader module={module} setModule={setModule} />
          <div className="card flex justify-content-center"></div>
          <Content
            style={{
              padding: "12px 14px",
              background: colorBgContainer,
            }}
            className="xxxxl:overflow-hidden"
          >
            {children}
            <AddNewContactButton></AddNewContactButton>
          </Content>
        </Layout>
      </Layout>

      {/* )}  */}
    </>
  );
};

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  );
};

const PublicLayout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate(`/conversation`);
    }
  }, []);
  return <>{props.children}</>;
};

const App = () => {
  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/share-conversation-public"
            name="Share Conversation Public"
            element={<ShareConversationPublic />}
          />
          <Route
            path="/share-step/:id"
            name="Share Step"
            element={<ShareStep />}
          />
          {PublicRoutes.map((el, index) => {
            return (
              <Route
                key={index + 1}
                path={el.path}
                name={el.name}
                element={<PublicLayout>{el.element}</PublicLayout>}
              ></Route>
            );
          })}
          {PrivateRoutes.map((el, index) => {
            return (
              <Route
                key={index + 1}
                path={el.path}
                name={el.name}
                element={<PrivateLayout>{el.element}</PrivateLayout>}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
