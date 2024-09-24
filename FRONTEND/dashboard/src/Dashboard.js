import React, { useState, useEffect } from 'react';
import './App.css';

function Dashboard() {
  // 模擬 TensorFlow 返回的關卡數據
  const [level, setLevel] = useState(1);
  
  // 模擬感測器的分數數據
  const [score, setScore] = useState(0);

  useEffect(() => {
    // 假設每5秒改變關卡，這裡可以未來接入TensorFlow的數據
    const levelInterval = setInterval(() => {
      setLevel(prevLevel => (prevLevel < 5 ? prevLevel + 1 : 1));
    }, 5000);

    // 假設每2秒更新感測器的分數
    const scoreInterval = setInterval(() => {
      setScore(Math.floor(Math.random() * 100)); // 模擬隨機分數
    }, 2000);

    // 清除計時器
    return () => {
      clearInterval(levelInterval);
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <div className="scoreboard">
        <div className="level">
          <h2>目前關卡</h2>
          <p>{`關卡 ${level}`}</p>
        </div>
        <div className="score">
          <h2>分數</h2>
          <p>{`分數 ${score}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

