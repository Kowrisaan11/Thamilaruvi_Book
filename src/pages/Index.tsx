import { useRef, useState } from "react";
import libraryBg from "@/assets/library-background.jpg";
import openVideo from "@/assets/openvideo.mp4";

const Index = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0; // Reset to start
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${libraryBg})` }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gold mb-4 text-center animate-glow-pulse">
          Thamilaruvi 2025
        </h1>
        <p className="font-body text-xl md:text-2xl text-foreground/80 mb-12 text-center italic">
          Launch the Book...
        </p>

        {/* Video Container */}
        <div
          className="relative cursor-pointer transition-all duration-700 hover:scale-105 animate-float rounded-xl overflow-hidden shadow-2xl"
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            src={openVideo}
            className="w-64 md:w-96 lg:w-[500px] h-auto rounded-xl"
            onEnded={handleVideoEnd}
          />
        </div>

        {/* Mystical Text (shows after video finishes) */}
        {!isPlaying && (
          <div className="mt-8 text-center animate-[fade-in_0.8s_ease-out]">
            <p className="font-body text-lg md:text-xl text-foreground/90 max-w-2xl leading-relaxed">
              "In ancient times, when magic flowed freely through the world, 
              this tome held the wisdom of the ages. Its pages contain spells 
              long forgotten, secrets of the ancients, and knowledge beyond measure..."
            </p>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-gold/30 text-6xl rotate-12 pointer-events-none hidden md:block">
          ✦
        </div>
        <div className="absolute bottom-10 right-10 text-gold/30 text-6xl -rotate-12 pointer-events-none hidden md:block">
          ✦
        </div>
      </div>
    </div>
  );
};

export default Index;
