import { useState, useEffect } from "react";

const LetterTransition = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Agua colorada, Salud para todos",
    "¡Compromiso con el saneamiento rural!",
  ];
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (!isReversing) {
        if (index < texts[textIndex].length) {
          setDisplayText(() => {
            // Añade la letra actual a la izquierda de las letras anteriores
            const updatedText = texts[textIndex].substr(0, index + 1);
            return updatedText;
          });
          index++;
        } else {
          setIsReversing(true);
        }
      } else {
        if (index > 0) {
          setDisplayText(() => {
            // Elimina la última letra del texto
            const updatedText = texts[textIndex].substr(0, index - 1);
            return updatedText;
          });
          index--;
        } else {
          setIsReversing(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [textIndex, isReversing]);

  return (
    <h5 className="md:text-4xl tracking-widest text-xl text-blue-400 font-bold text-center letter-transition">
      {displayText.split("").map((letter, index) => (
        <span key={index} className="letter merienda">
          {letter} 
        </span>
      ))}
    </h5>
  );
};

export default LetterTransition;
