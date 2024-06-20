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
  return (
    <div className="flex gap-4 md:justify-center py-6 px-2 md:overflow-x-hidden overflow-x-auto">
      {noticeFacebookItems.map((data) => (
        <div className="overflow-y-auto h-[400px] md:h-[500px] flex-shrink-0">
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
    </div>
  );
};

export default CardNoticeFacebook;
