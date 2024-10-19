import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import CanvasScene from "./CanvasScene";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./styles.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} className="main w-full">
      <nav className="fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center">
        <div className="logo">
          <img
            src="https://i.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1920&format=png&auto=webp&s=f42dbd8f5c04aedb9ba9291c1ba4d679029cc1f3"
            alt="Logo"
            className="w-[120px] aspect-ratio"
          />
        </div>
        <ul className="flex space-x-4 text-xs">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      <div className="w-full h-screen relative">
        <img
          className="w-[60%] absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] mix-blend-screen filter saturate-200 contrast-150 "
          src="https://i.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1920&format=png&auto=webp&s=f42dbd8f5c04aedb9ba9291c1ba4d679029cc1f3"
          alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[25rem] h-[25rem] rounded-full bg-blue-600 blur-3xl"></div>
        <CanvasScene />
      </div>

      <div className="w-full h-screen"></div>
    </div>
  );
}

export default App;
