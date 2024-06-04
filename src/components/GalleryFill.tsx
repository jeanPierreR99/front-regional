import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const GalleryFill: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="grid grid-cols-3 md:grid-cols-4">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 100 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 relative sepia hover:sepia-0 duration-500 overflow-hidden"
      >
        <img
          src="https://www.shutterstock.com/image-photo/asian-boy-washing-his-hand-260nw-1962143329.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: -100 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 grayscale hover:grayscale-0 duration-500 overflow-hidden"
      >
        <img
          src="https://www.paho.org/sites/default/files/webinario-aguas-residuales-400x_0.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 100 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 sepia hover:sepia-0 duration-500 overflow-hidden"
      >
        <img
          src="https://www.shutterstock.com/image-photo/workers-install-underground-pipes-water-260nw-2232162815.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: -100 }}
        animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block col-span-1 grayscale hover:grayscale-0 duration-500 overflow-hidden"
      >
        <img
          src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/10/13/000456530W.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: -100 }}
        animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 grayscale hover:grayscale-0 duration-500 overflow-hidden"
      >
        <img
          src="https://www.uesvalle.gov.co/info/uesvalle/media/pubInt/thumbs/thpubInt_700X400_1623.webp"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 100 }}
        animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 sepia hover:sepia-0 duration-500 overflow-hidden"
      >
        <img
          src="https://kibeconstrucciones.com/Sgc/uploads/obras/obr43-279.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: -100 }}
        animate={inView7 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 grayscale hover:grayscale-0 duration-500 overflow-hidden"
      >
        <img
          src="https://flowen.com.pe/wp-content/uploads/2020/12/PARA-BLOGS.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
      <motion.div
        ref={ref8}
        initial={{ opacity: 0, y: 100 }}
        animate={inView8 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="hidden col-span-1 md:block sepia hover:sepia-0 duration-500 overflow-hidden"
      >
        <img
          src="https://perupatrimoniocultural.files.wordpress.com/2023/03/3-caratula-amazonia.jpg"
          className="w-full h-full md:h-[170px] object-cover hover:scale-110 duration-500"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default GalleryFill;
