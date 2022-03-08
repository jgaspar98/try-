import { Suspense } from "react";
import './room.css'

//*Components
import { Canvas} from "react-three-fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";


//*IMPORT OF MODELS
const RoomModel = () => {
  const gltf = useGLTF("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};


const RoomSpin = () => {

  // Right Side position position={[100, -20 , 0]}
  return (
    <mesh scale={1} position={[0,-50,0]} >
      <RoomModel />
      <OrbitControls/>
    </mesh>
  );
};

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[20, 20, 5]} intensity={1.5} />
    </>
  );
};

function Room() {
  return (
    <div className="room_wrapper">
        <Canvas
          className="room"
          colorManagement
          camera={{ position: [0, 50, 500], fov: 30 }}
          //to see full planet change to 50 fov
        >
          <Light />
          <Suspense fallback={null}>
          <RoomSpin />
          </Suspense>
        </Canvas>
    </div>
  );
}

export default Room;
