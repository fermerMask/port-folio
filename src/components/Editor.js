import React from "react";
const Editor = ({ activeTab }) => {
    const renderContent = () => {
      switch (activeTab) {
        case 'about':
          return <p>// こんにちは！私は〇〇です。Web開発とデザインが得意です。</p>;
        case 'works':
          return (
            <ul className="list-disc list-inside">
              <li><a href="https://yourproject1.com" target="_blank">🚀 Project 1 - Webアプリ</a></li>
              <li><a href="https://yourproject2.com" target="_blank">📱 Project 2 - モバイルアプリ</a></li>
            </ul>
          );
        case 'socials':
          return (
            <ul>
              <li><a href="https://github.com/yourusername" target="_blank">🐙 GitHub</a></li>
              <li><a href="https://twitter.com/yourhandle" target="_blank">🐦 Twitter</a></li>
              <li><a href="https://linkedin.com/in/yourname" target="_blank">💼 LinkedIn</a></li>
            </ul>
          );
        default:
          return <p>// 選択されたタブが見つかりません</p>;
      }
    };
  
    return (
      <div className="flex-1 p-6 overflow-auto bg-gray-900">
        <h1 className="text-xl mb-4 text-green-400">{activeTab}.js</h1>
        <div className="text-sm text-gray-200">{renderContent()}</div>
      </div>
    );
  };
  
  export default Editor;
  