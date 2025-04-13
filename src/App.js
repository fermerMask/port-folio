// App.js

import React from 'react';
import Editor from './components/Editor'; // Editorコンポーネントをインポート
import Sidebar from './components/Sidebar'; // Sidebarコンポーネントをインポート
import Terminal from './components/Terminal'; // Terminalコンポーネントをインポート

import './index.css';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* ヘッダー */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button className="bg-blue-500 px-4 py-2 rounded">Rauncher</button>
      </header>

      {/* メインコンテンツ */}
      <div className="flex flex-col lg:flex-row">
        {/* サイドバー */}
        <Sidebar />

        {/* エディター */}
        <Editor />
      </div>

      {/* ターミナル */}
      <Terminal />
    </div>
  );
}

export default App;
