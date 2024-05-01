import React from 'react';

const Mision:React.FC =() =>{
    return (
  
    <div className="w-12/12 relative h-[auto] p-10 cont-img flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex pb-12 backdrop-blur-md bg-white flex-col items-center w-[400px] p-2 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#11BEF8] inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <div className="">
                <h2 className="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Misión
                </h2>
                <p className="leading-relaxed text-gray-500 font-light">
                    Nuestra misión es proporcionar soluciones innovadoras y de calidad
                    en el ámbito de la vivienda, construcción y saneamiento,
                    contribuyendo al desarrollo sostenible y mejora de la calidad de
                    vida de la comunidad.
                </p>
            </div>
        </div>
        <div className="flex pb-12 backdrop-blur-md bg-white flex-col items-center w-[400px] p-2 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#11BEF8] inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <div className="">
                <h2 className="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Visión
                </h2>
                <p className="leading-relaxed text-gray-500 font-light">
                    Nuestra misión es proporcionar soluciones innovadoras y de calidad
                    en el ámbito de la vivienda, construcción y saneamiento,
                    contribuyendo al desarrollo sostenible y mejora de la calidad de
                    vida de la comunidad.
                </p>
            </div>
        </div>
        <div className="flex pb-12 bg-white flex-col items-center w-[400px] p-2 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#11BEF8] inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 14v5M12 11V7"></path>
                </svg>
            </div>
            <div className="">
                <h2 className="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Valores
                </h2>
                <p className="leading-relaxed text-gray-500 font-light">
                    Nuestra misión es proporcionar soluciones innovadoras y de calidad
                    en el ámbito de la vivienda, construcción y saneamiento,
                    contribuyendo al desarrollo sostenible y mejora de la calidad de
                    vida de la comunidad.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Mision;