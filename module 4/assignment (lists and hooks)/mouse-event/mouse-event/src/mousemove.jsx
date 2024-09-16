import { useState, useEffect } from 'react';

function MoveOnMouse() {
  // State to track the mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position when the mouse moves
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Set up and clean up the event listener using useEffect
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Element that moves on mouse move */}
      <div
        style={{
          position: 'absolute',
          left: position.x + 'px',
          top: position.y + 'px',
          transform: 'translate(-50%, -50%)', // Centers the element at the mouse position
        }}
        className="bg-blue-500 text-white p-4 rounded-lg shadow-lg"
      >
        I'm following the mouse!
      </div>
    </div>
  );
}

export default MoveOnMouse;
