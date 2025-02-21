import { useState, useEffect } from "react";

const Pages = () => {
  const words = ["Programación", "Software-Pc", "Hardware-Pc"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="bg-green-600 rounded-b-lg w-[50%] text-center">
          <h1 className="text-white font-bold text-[30px]">
            Los mejores cursos para que aprendas en:
          </h1>
        </div>
      </div>

      <div className="bg-green-600 rounded-2xl w-[70%] flex flex-col items-center justify-center mt-4 w-auto h-auto">
        <h2
          className="text-white font-bold text-[40px] text-center"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {words[currentWordIndex]}
        </h2>
        <div>
          

        </div>
      </div>
    </>
  );
};

export default Pages;
