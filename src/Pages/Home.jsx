import React from 'react';

const Home = () => {
  return (
    <div className="bg-cyan-500 flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div className="lg:w-3/4 p-8">
        <h1 className="text-4xl font-bold mb-4 font-mono">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8 font-mono">I'm excited to showcase my projects and skills.</p>
        <a href="/Project" className="bg-cyan-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded font-mono">View Projects</a>
      </div>
    </div>
  );
}

export default Home;