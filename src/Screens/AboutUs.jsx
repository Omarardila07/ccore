import "../resolucion/movil.css"
import img1 from '../Img/perfil.png'
import Visi from '../icons/visi'
import Misi from '../icons/misi'

const About = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden max-w-screen">
            {/* Círculos decorativos */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-2 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 right-1 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 top-1/4 left-1/4 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 top-1/3 right-1/3 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 top-1/1 right-1/3 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 top-1/1 left-1/4 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 top-1/1 left-1/4 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-2 w-72 h-72 bg-green-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 w-[90%] mt-20 text-center">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="text-left">
                        <h2 className="text-[50px] font-bold text-green-600">¿Quién Soy?</h2>
                        <p>
                            Soy Omar Ardila, Programador de Software. Me gradué en el técnico en software en el Servicio Nacional de Aprendizaje (SENA) y completé mi bachillerato en la institución Cesar Pompeyo Mendoza Hinojoza.
                        </p>
                        <br />
                        <p>
                            C-Core es una plataforma educativa dedicada a facilitar el aprendizaje y el éxito académico en informática. Nos enfocamos en proporcionar recursos de calidad, tutorías personalizadas y un entorno colaborativo. Nuestra misión es apoyar a los estudiantes en su formación, preparándolos para el éxito en el mundo tecnológico.
                        </p>
                    </div>
                    <div>
                        <img className="w-[400px] rounded-[10%] shadow-lg" src={img1} alt="Perfil" />
                    </div>
                </div>

                {/* Misión y Visión */}
                <div className="flex flex-col lg:flex-row gap-10 justify-center text-white mt-10 mx-auto">
                    <div className="bg-green-600 border-2 border-white p-10 lg:w-[40%] rounded-xl shadow-lg">
                        <div className="flex gap-2 items-center">
                            <Misi />
                            <h4 className="text-[40px] font-bold">Misión</h4>
                        </div>
                        <p className="text-left mt-2">
                            En C-Core, trabajamos incansablemente para ser el epicentro del conocimiento y apoyo, proporcionando herramientas innovadoras, tutorías personalizadas y un espacio colaborativo. Nuestra misión es guiar a los estudiantes hacia el éxito en informática, fortaleciendo su confianza y habilidades.
                        </p>
                    </div>
                    <div className="bg-green-600 border-2 border-white p-10 lg:w-[40%] rounded-xl shadow-lg">
                        <div className="flex gap-2 items-center">
                            <Visi />
                            <h4 className="text-[40px] font-bold">Visión</h4>
                        </div>
                        <p className="text-left mt-2">
                            Posicionarnos como la principal fuente de apoyo educativo en informática, donde los estudiantes encuentran inspiración, recursos avanzados y una comunidad activa. Aspiramos a ser reconocidos como un referente que impulsa el éxito académico y profesional en el ámbito tecnológico.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
