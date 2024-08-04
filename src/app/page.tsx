"use client";
import { useState } from "react";
import Communities from "@/components/communities/communities";
import HowToBuy from "@/components/how-to-buy/how-to-buy";
import License from "@/components/license/license";
import UsagiStory from "@/components/usagi-story/story";
import Welcome from "@/components/welcome/welcome";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <ParallaxProvider>
      <main className="w-full flex flex-col items-center ">
        {isVideoPlaying ? (
          <div className="w-full h-screen">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              onEnded={handleVideoEnd}
            >
              <source src="/videos/Loading.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <>
            <Welcome />
            <UsagiStory />
            <div
              className="relative z-[20] w-full 2xl:max-w-[1440px] flex flex-col items-center bg-[rgba(234,218,203,1)] 
            bg-[url('/images/background.png')] bg-opacity-[0.08] bg-blend-exclusion h-[2009px] bg-cover"
            >
              <HowToBuy />
              <Communities />
              <License />
              <button
                className="w-[257.695px] h-[67.032px] flex items-center justify-center right-[57px] bottom-[113px] 
              absolute bg-[url('/images/license/backtop.png')] text-[24px] leading-8 font-bold
              hover:scale-105 duration-200"
              >
                BACK TO TOP
              </button>
            </div>
          </>
        )}
      </main>
    </ParallaxProvider>
  );
}
