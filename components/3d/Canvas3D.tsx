import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX, Html, useProgress } from '@react-three/drei';
import { ObjectProps } from 'utils/types';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { Box } from '@whammytechvn/wt-components';

export default function Canvas3D({ url, alt, imgFallback }: { url: string; alt: string; imgFallback: string }) {
  if (!url)
    return (
      <Box className="relative w-full h-full">
        <CustomImage
          loader={externaImageLoader}
          alt={alt}
          src={imgFallback}
          className="rounded-[2rem]"
          layout="fill"
          object="contain"
        />
      </Box>
    );

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={1} />
        <Model position-y={-3.5} scale={[0.7, 0.7, 0.7]} url={url} />
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
