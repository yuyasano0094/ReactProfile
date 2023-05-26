import "./App.css";
import { useRef } from "react";
import moon from "./FullMoon2010.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//import { Parallax } from "react-parallax";
function App() {
  //const ref = useRef();
  return (
    <div>
      <Parallax
        pages={4}
        style={{ backgroundImage: "linear-gradient(#e66465, #9198e5)" }}
      >
        {/* <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div> */}
        <ParallaxLayer
          offset={0}
          //speed={0.1}
          className="center"
          factor={1.2}
          style={{ backgroundColor: "#FFCDD2" }}
        >
          <div className="text-content">Normal Parallax</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={16}
          className="center"
          style={{ backgroundColor: "#EF9A9A" }}
        >
          <div className="text-content">Normal Parallax</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          //speed={12}
          className="center"
          factor={0.9}
          style={{ backgroundColor: "#E57373" }}
        >
          <div className="text-content">Normal Parallax</div>
        </ParallaxLayer>
      </Parallax>
      {/* <div className="content"></div> */}
    </div>
  );
}

export default App;
