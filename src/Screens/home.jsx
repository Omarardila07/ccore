import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      const whatsappLink = `https://api.whatsapp.com/send?phone=573207169889&text=${encodeURIComponent(inputValue)}`;
      window.open(whatsappLink, "_blank");

      console.log("Mensaje enviado:", inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden max-w-screen">
      {/* Círculos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-green-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-green-500 rounded-full opacity-40 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 top-1/4 left-1/4 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 top-1/3 right-1/3 w-72 h-72 bg-green-400 rounded-full opacity-25 blur-2xl animate-pulse"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col text-center w-[90%] md:w-[70%] lg:w-[50%] p-6 bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-2xl">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-green-500 leading-tight">
          Obtén la calificación de tus sueños en informática con C-Core
        </h1>

        <p className="mt-5 font-medium text-sm md:text-lg lg:text-xl text-gray-300">
          Escribe en la etiqueta tu nombre, grado y cómo puedo ayudarte. Al
          presionar el botón, irás a mi WhatsApp personal. ¡Contacta para
          asistencia informática u otras consultas! Estoy disponible de
          inmediato.
        </p>

        {/* Sección de entrada y botón */}
        <div className="mt-1 w-full flex flex-col items-center space-y-4">
          {!isLoggedIn && (
            <p className="text-red-500 font-semibold">
              Por favor, inicia sesión o regístrate para poder enviar un mensaje al WhatsApp.
            </p>
          )}
          <input
            type="text"
            placeholder="¡Escribe aquí!"
            className={`w-[90%] md:w-[70%] p-3 rounded-xl text-black font-semibold shadow-md outline-none focus:ring-2 focus:ring-green-500 ${
              isLoggedIn ? "bg-white" : "bg-gray-400"
            }`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={!isLoggedIn}
          />
          <button
            className="w-[90%] md:w-[70%] bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleClick}
            disabled={!isLoggedIn}
          >
            Enviar a WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
