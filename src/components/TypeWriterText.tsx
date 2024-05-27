import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const LetterTransition = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.1, // Cuando el 20% del card es visible
  });
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
    <motion.h5
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="md:text-2xl text-xl text-center letter-transition"
    >
      {displayText.split("").map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </motion.h5>
  );
};

export default LetterTransition;
