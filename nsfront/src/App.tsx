// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./screens/LoginPage/LoginPage";
import { HomePage } from "./screens/HomePage/HomePage";
import { NextPage } from "./screens/NextPage/NextPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 가장 먼저 보여줄 페이지 (루트 경로) */}
        <Route path="/" element={<LoginPage />} />

        {/* 로그인 성공 후 이동하는 페이지 */}
        <Route path="/home" element={<HomePage />} />

        {/* 주식 예측 버튼 클릭 후 이동하는 페이지 */}
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
