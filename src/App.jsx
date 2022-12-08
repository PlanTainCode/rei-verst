import React from "react";
import { Layout } from "./components";
import About from "./pages/About";
import Article from "./pages/Article";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import News from "./pages/News";
import Template from "./pages/Template";
import Works from "./pages/Works";

function App() {
  return (
    <Layout>
      <div className="page">
        {/* <Home /> */}
        {/* <News /> */}
        {/* <Article /> */}
        {/* <Works /> */}
        {/* <Template /> */}
        {/* <About /> */}
        <Contacts />
      </div>
    </Layout>
  );
}

export default App;
