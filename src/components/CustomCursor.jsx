import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover detection
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;

