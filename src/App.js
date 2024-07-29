import React from "react";
import "./assets/main.css";

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1722029271254-66724eb7428f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by shehan</div>
        <ul>
          <li>
            <strong>Views: </strong>4000
          </li>
          <li>
            <strong>Downloads: </strong>300
          </li>
          <li>
            <strong>Likes: </strong>400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=2
// 15.9
