import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX, Html, useProgress } from '@react-three/drei';
import { ObjectProps } from 'utils/types';

export default function Canvas3D() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1} />
        <Model position-y={-3} scale={[0.7, 0.7, 0.7]} url="/assets/3d/vay_low.fbx" />
        <OrbitControls autoRotate />
      </Suspense>
    </Canvas>
  );
}

function Model({ url, ...props }: ObjectProps) {
  const scene = useFBX(url);
  return <primitive {...props} object={scene} castShadow receiveShadow />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
