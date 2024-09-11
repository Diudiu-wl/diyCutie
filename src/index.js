import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // 引入全局样式
import App from "./App"; // 引入主组件



// 将 App 组件渲染到页面的 root 节点中
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
