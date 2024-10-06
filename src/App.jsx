import React from 'react';
import { useState, useEffect } from 'react';
import StopWatch from './components/stopWatch';

function App() {
  return (
    <>
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <StopWatch />
    </div>
    </>
  );
}

export default App
