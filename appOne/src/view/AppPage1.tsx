import AppTwoButton from 'apptwo/AppTwoButton'
import AppTwoCard from 'apptwo/AppTwoCard'
import React from "react";


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
          AppOne: 我是应用1
        </header>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div style={{ padding: 20 }}>在应用1中使用按钮组件AppTwoButton</div>
          <AppTwoButton />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div style={{ padding: 20 }}>在应用1中使用卡片组件AppTwoCard</div>
          <AppTwoCard />
        </div>
      </div>
    );
  };
  