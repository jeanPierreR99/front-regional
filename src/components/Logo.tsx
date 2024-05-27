import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Logo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.2, // Cuando el 20% del card es visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 justify-between"
    >
      <div className="w-[200px] sm:w-[270px] bg-gray-900 border border-[#3183a9] h-[120px] rounded-md">
        <img
          className="w-full h-full rounded-md"
          src="https://lh3.googleusercontent.com/proxy/UoiKat8MHW2UXDbZUD391fJLblacUplBgip1wAee673DyjZT7MEodEh9UdCCzLgcgMEUbqfltWY5mZoNG8s5xpDspOUB"
          alt="v"
        />
      </div>
      <div className="w-[200px] sm:w-[270px] bg-gray-900 border border-[#3183a9] h-[120px] rounded-md">
        <img
          className="w-full h-full rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Cis9KZLMeRy-iPWLt8MCutUZAfQqVrZvosnzWjR_gQ&s"
          alt="v"
        />
      </div>
      <div className="w-[200px] sm:w-[270px] bg-gray-900 border border-[#3183a9] h-[120px] rounded-md">
        <img
          className="w-full h-full rounded-md"
          src="https://siar.minam.gob.pe/madrededios/wp-content/uploads/2022/02/logo-SIAR_1.png"
          alt="v"
        />
      </div>
      <div className="w-[200px] sm:w-[270px] bg-gray-900 border border-[#3183a9] h-[120px] rounded-md">
        <img
          className="w-full h-full rounded-md"
          src="https://www.dramdd.gob.pe/wp-content/uploads/2018/07/logo-mobile2-w.png"
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default Logo;
