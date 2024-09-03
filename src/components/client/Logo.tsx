import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Logo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.2, // Cuando el 20% del card es visible
  });

  const items = [
    {
      id: 1,
      url: "https://regionmadrededios.gob.pe/visitas/logo-aa.png",
    },
    {
      id: 2,
      url: "https://www.sedamhuancayo.com.pe/wp-content/uploads/2021/09/b3_anepssa.png",
    },
    {
      id: 3,
      url: "https://regionmadrededios.gob.pe/visitas/logo-aa.png",
    },
    {
      id: 4,
      url: "https://www.dramdd.gob.pe/wp-content/uploads/2018/07/logo-mobile2-w.png",
    },
    {
      id: 5,
      url: "https://siar.minam.gob.pe/madrededios/wp-content/uploads/2022/02/logo-SIAR_1.png",
    },
    {
      id: 6,
      url: "https://www.dramdd.gob.pe/wp-content/uploads/2018/07/logo-mobile2-w.png",
    },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 md:grid-cols-6 gap-2 "
    >
      {items.map((data) => (
        <div key={data.id} className="">
          <img
            className="w-full h-[60px] md:h-[80px]"
            src={data.url}
            alt="v"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default Logo;
