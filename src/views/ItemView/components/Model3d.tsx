import { OrbitControls, useFBX, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';

const SCALE = 1.5;

const Model = ({ url, urlTexture, ...props }: any) => {
  const obj = useFBX(url);
  const texture = useTexture({ map: urlTexture });

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c: any) => {
      if (c.type === 'Mesh') {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh geometry={geometry} {...props}>
      <meshPhysicalMaterial {...texture} />
    </mesh>
  );
};

const Model3d = ({ urlModel, urlTexture }: { urlModel: string; urlTexture: string }) => {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate enableZoom={false} />
      <Suspense fallback={null}>
        <Model scale={[SCALE, SCALE, SCALE]} url={urlModel} urlTexture={urlTexture} />
      </Suspense>
    </Canvas>
  );
};

export default Model3d;
