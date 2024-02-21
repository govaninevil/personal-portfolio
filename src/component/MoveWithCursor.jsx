import React, { useEffect } from "react";

const MoveWithCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll(".move-with-cursor");
      elements.forEach((element) => {
        const t = e.clientX;
        const eY = e.clientY;
        element.style.transition =
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        element.style.transform = `translate(${0.01 * t}px, ${
          0.01 * eY
        }px) rotate(${0.01 * (t + eY)}deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default MoveWithCursor;
