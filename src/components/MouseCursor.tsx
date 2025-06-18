import React, { useState, useEffect, useCallback, useRef } from 'react';

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use requestAnimationFrame for smooth, optimized updates
    rafRef.current = requestAnimationFrame(() => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      setCursorDotPosition({ x, y });
    });
  }, []);

  useEffect(() => {
    // Add passive event listener for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <>
      <div 
        className="cursor-glow fixed pointer-events-none will-change-transform z-10"
        style={{ 
          transform: `translate3d(${mousePosition.x - 250}px, ${mousePosition.y - 250}px, 0)`,
        }}
      />
      <div 
        className="cursor-dot fixed pointer-events-none will-change-transform z-20"
        style={{ 
          transform: `translate3d(${cursorDotPosition.x - 3}px, ${cursorDotPosition.y - 3}px, 0)`,
        }}
      />
    </>
  );
}