import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="video-container border-red-600">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zvZuTSTDp50"
        width="100%"
        controls
        // playing
        loop
      />
    </div>
  );
};

export default VideoPlayer;
