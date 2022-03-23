import React, { Suspense, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useFBX, Html, useProgress } from '@react-three/drei';
import { ObjectProps } from 'utils/types';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { Box } from '@whammytechvn/wt-components';
// import { useTexture } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Mesh, Texture } from 'three';
import clsxm from 'utils/clsxm';

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
  const cxCanvas = clsxm("bg-[url('/media/landing/frame-3d.png')] bg-[length:100%] bg-center bg-no-repeat", className);

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
      <Suspense fallback={<Loader />}>
        <Model position-y={-2} scale={[0.4, 0.4, 0.4]} url={url} urlTexture={urlTexture} />
      </Suspense>
    </Canvas>
  );
}

function Model({ url, urlTexture, ...props }: ObjectProps) {
  // const texture = useTexture({ map: urlTexture });
  const obj = useFBX(url);
  const texture = useLoader(TextureLoader, urlTexture) as Texture;

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
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
