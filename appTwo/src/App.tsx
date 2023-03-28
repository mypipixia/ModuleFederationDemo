import React from "react";
import { Routes, Route } from "react-router-dom";

const AppPage1 = React.lazy(() => import("./view/AppPage1"));

export default () => {
  return (
    <Routes>
      <Route path="/" element={<AppPage1 />} />
      <Route path="/AppPage1" element={<AppPage1 />} />
    </Routes>
  );
};
