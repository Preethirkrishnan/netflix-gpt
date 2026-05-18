const VideoBackground = () => {
  return (
    <div className="w-full">
      <div className="w-full h-205 bg-linear-to-r from-black to-transparent absolute"></div>
      <iframe
        width="100%"
        height="820px"
        src="https://www.youtube.com/embed/f_Y5YeYrqUk?si=KeJHQGpze-AKm6YR?&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
