import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const noticeFacebookItems = [
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0oCxMWY2n4r7ULuZaMyLir91FDcGH2pDQkqJvQ8Yku8VrnNN9pMcVNySmu8gRTzSbl&show_text=true&width=380",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0KrTewcdsUzVh3WvXd2fKkqBs53uh98hsag2mTvXXg7FQrowyuSxGzShKjLEW45wql&show_text=true&width=380",
  },
  {
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDRVCSMDD%2Fposts%2Fpfbid0oCxMWY2n4r7ULuZaMyLir91FDcGH2pDQkqJvQ8Yku8VrnNN9pMcVNySmu8gRTzSbl&show_text=true&width=380",
  },
];

const CardNoticeFacebook = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo animar una vez
    threshold: 0.2, // Cuando el 20% del card es visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 md:justify-center py-6 px-2 md:overflow-x-hidden overflow-x-auto"
    >
      {noticeFacebookItems.map((data, index) => (
        <div key={index} className="overflow-y-auto h-[400px] md:h-[500px] flex-shrink-0">
          <iframe
            src={data.url}
            style={{ border: "none" }}
            width={380}
            height={400}
            className="overflow-y-auto h-[800px]"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      ))}
    </motion.div>
  );
};

export default CardNoticeFacebook;
