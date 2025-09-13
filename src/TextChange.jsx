import React, { useState, useEffect } from "react";

const TextChange = () => {
  const animatedText = "I am Manish";
  const staticText = "Hii, ";
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    let timeout;

    if (!isDeleting && charIndex < animatedText.length) {
      timeout = setTimeout(() => {
        setCurrentText(animatedText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(animatedText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex === animatedText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, animatedText]);

  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold
        bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600
        bg-clip-text text-transparent tracking-wide transition-all duration-300 ease-in-out"
    >
      {staticText}
      {currentText}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
};

export default TextChange;
