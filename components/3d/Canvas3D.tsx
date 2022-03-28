import React, { Suspense, useMemo } from 'react';
import { OrbitControls, useFBX, Html, useProgress, useTexture } from '@react-three/drei';
import { ObjectProps } from 'utils/types';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { Box } from '@whammytechvn/wt-components';
import clsxm from 'utils/clsxm';
import { Mesh } from 'three/src/objects/Mesh';
import { Canvas } from '@react-three/fiber';

export default function Canvas3D({
  url,
  urlTexture,
  alt,
  imgFallback,
  className
}: {
  url: string;
  urlTexture: string;
  alt: string;
  className?: string;
  imgFallback: StaticImageData | string;
}) {
  const cxCanvas = clsxm('bg-blue-300/30 rounded-[2rem]', className);

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
    <Canvas dpr={[1, 2]} camera={{ position: [-2, 2, 4], fov: 50 }} className={cxCanvas}>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate />
      <Suspense fallback={<>...</>}>
        <Model position-y={-2} scale={[0.4, 0.4, 0.4]} url={url} urlTexture={urlTexture} />
      </Suspense>
    </Canvas>
  );
}

function Model({ url, urlTexture, ...props }: ObjectProps) {
  // const texture = useTexture({ map: urlTexture });
  const obj = useFBX(url);
  const texture = useTexture({ map: urlTexture });

  const geometry = useMemo(() => {
    let g;
    obj.traverse(c => {
      if (c.type === 'Mesh') {
        const _c = c as Mesh;
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
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
