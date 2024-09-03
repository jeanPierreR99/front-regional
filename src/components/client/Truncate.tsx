export const Truncate = ({ text, wordLimit }: any) => {
  const truncatedText = text.split(" ").slice(0, wordLimit).join(" ") + "...";
  if (!text) {
    return null;
  }
  return (
    <span className="truncate text-blue-800 font-bold">
      {" / " + truncatedText}
    </span>
  );
};
