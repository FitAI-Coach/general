import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import TeachableMachinePoseModel from './TeachableMachinePoseModel'; // 新增 AI Camera 頁面
import './App.css';

function App() {
  const location = useLocation();  // 用來檢查當前的路由

  return (
    <div className="App">
      {/* 當不是 /dashboard 或 /ai-camera 時顯示主頁 */}
      {location.pathname !== "/dashboard" && location.pathname !== "/ai-camera" && (
        <header className="App-header">
          <h1>AIoT 健身教練系統</h1>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">進入 Dashboard</Link>
              </li>
              <li>
                <Link to="/ai-camera">AI Camera</Link> {/* AI Camera 的連結 */}
              </li>
            </ul>
          </nav>
        </header>
      )}
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-camera" element={<TeachableMachinePoseModel />} /> {/* AI Camera 頁面 */}
      </Routes>
    </div>
  );
}

export default App;
