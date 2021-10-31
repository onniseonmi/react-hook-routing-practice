import React from 'react';
import { useCanvas } from './Hooks/useCanvas';
import './App.css';

function App() {
  const [canvasRef, CANVAS_SIZE, handleCanvasClick, handleClearCanvas] =
    useCanvas();
  return (
    <main className='App'>
      <canvas
        className='canvas'
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onClick={handleCanvasClick}
        ref={canvasRef}
      />
      <div className='button'>
        <button onClick={handleClearCanvas}>Clear</button>
      </div>
    </main>
  );
}

export default App;
