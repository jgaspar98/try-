import { Suspense } from "react";
import './room.css'

//*Components
import { Canvas } from "react-three-fiber";
import { useGLTF, Html, OrbitControls } from "@react-three/drei";


//*IMPORT OF MODELS
const RengokuModel = () => {
  const gltf = useGLTF("/rengoku/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};


const RengokuSpin = () => {

  // Right Side position position={[100, -20 , 0]}
  return (
    <mesh scale={40} position={[0,-30,0]} >
      <RengokuModel />
      <OrbitControls/>
    </mesh>
  );
};

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[50, 20, 5]} intensity={1} />
      <directionalLight position={[10, 20, 5]} intensity={1} />
      <directionalLight position={[10, -20, 5]} intensity={0.5} />
    </>
  );
};

function Rengoku() {
  return (
    <div className="rengoku_wrapper">
        <Canvas
          className="room"
          colorManagement
          camera={{ position: [0, 0, 100], fov: 70 }}
          //to see full planet change to 50 fov
        >
          <Light />
        <Suspense fallback={null}>
          <Html>
            <h2 className="code-text">Kyōjurō Rengoku</h2>
          </Html>
          <RengokuSpin />
          </Suspense>
        </Canvas>
    </div>
  );
}

export default Rengoku;
