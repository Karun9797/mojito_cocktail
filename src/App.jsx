import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div className="flex-center h-[100vh]">
        <h1 className="text-[10rem] text-indigo-600">Hello, Karun</h1>
      </div>
    </>
  );
}

export default App;
