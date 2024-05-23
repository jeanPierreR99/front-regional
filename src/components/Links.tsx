import React from "react";

const Links: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <a
        className="text-blue-400 w-fit hover:text-blue-600 border-b border-b-blue-400 hover:border-b-blue-600"
        href="https://datass.vivienda.gob.pe/"
      >
        DATASS
      </a>
      {/* <div className="w-full h-[600px]">
        <iframe
          title="DATASS"
          src="https://datass.vivienda.gob.pe/"
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div> */}
      <a
        className="text-blue-400 w-fit hover:text-blue-600 border-b border-b-blue-400 hover:border-b-blue-600"
        href="https://datass.vivienda.gob.pe/"
      >
        otro
      </a>
      <a
        className="text-blue-400 w-fit hover:text-blue-600 border-b border-b-blue-400 hover:border-b-blue-600"
        href="https://datass.vivienda.gob.pe/"
      >
        otro
      </a>
      <a
        className="text-blue-400 w-fit hover:text-blue-600 border-b border-b-blue-400 hover:border-b-blue-600"
        href="https://datass.vivienda.gob.pe/"
      >
        otro
      </a>
    </div>
  );
};

export default Links;
