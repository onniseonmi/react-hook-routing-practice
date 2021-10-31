import { useEffect, useRef, useState } from 'react';

export const useCanvas = () => {
  const CANVAS_SIZE = 700;
  const canvasRef = useRef();
  const [coordinates, setCoordnates] = useState([]);

  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.width = CANVAS_SIZE;
    context.height = CANVAS_SIZE;
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    coordinates.forEach((coordinate) => {
      draw(context, coordinate);
    });
  });

  const draw = (context, location) => {
    const heartSVG =
      'M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z';
    const SVG_PATH = new Path2D(heartSVG);
    const SCALE = 0.1;
    const OFFSET = location.x - location.y;
    context.fillStyle = 'red';
    context.shadowColor = 'blue';
    context.shadowBlur = 15;
    context.save();
    context.scale(SCALE, SCALE);
    context.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    context.rotate((225 * Math.PI) / 180); //방향을 잡아줌
    context.fill(SVG_PATH);
    context.restore();
  };
  // 캔바스를 클릭했을때 좌표를 계산해줌
  const handleCanvasClick = (event) => {
    console.log('event');
    console.log(event);
    const currentCoord = { x: event.clientX, y: event.clientY };
    setCoordnates([...coordinates, currentCoord]);
  };
  const handleClearCanvas = (event) => {
    setCoordnates([]);
  };

  return [canvasRef, CANVAS_SIZE, handleCanvasClick, handleClearCanvas];
};
