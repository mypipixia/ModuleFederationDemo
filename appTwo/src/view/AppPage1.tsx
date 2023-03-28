import React from "react";
import AppTwoButton from "../components/AppTwoButton";
import AppTwoCard from "../components/AppTwoCard";

export default () => {
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          fontSize: 24,
          padding: 20,
        }}
      >
        AppTwo: 我是应用2
      </header>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div style={{ padding: 20 }}>提供给应用1的按钮组件AppTwoButton</div>
        <AppTwoButton />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div style={{ padding: 20 }}>提供给应用1的卡片组件AppTwoCard</div>
        <AppTwoCard />
      </div>
    </div>
  );
};
