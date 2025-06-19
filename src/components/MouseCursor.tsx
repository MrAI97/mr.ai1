import React, { useState, useEffect, useCallback } from 'react';

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorDotPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    // Throttle mouse move events
    let timeoutId: number;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          handleMouseMove(e);
          timeoutId = 0;
        }, 16); // Approximately 60fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  return (
    <>
      <div 
        className="cursor-glow fixed pointer-events-none will-change-transform"
        style={{ 
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate3d(-50%, -50%, 0)`,
        }}
      />
      <div 
        className="cursor-dot fixed pointer-events-none will-change-transform"
        style={{ 
          transform: `translate3d(${cursorDotPosition.x}px, ${cursorDotPosition.y}px, 0) translate3d(-50%, -50%, 0)`,
        }}
      />
    </>
  );
}