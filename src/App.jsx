import React from "react";
import Form from "./components/Form";
function App() {
  return (
    <div className="flex w-full h-screen  ">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex w-1/2 h-full items-center justify-center bg-gray-200">
        <div className="h-60 w-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 bottom-0 bg-white/10 absolute backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default App;
