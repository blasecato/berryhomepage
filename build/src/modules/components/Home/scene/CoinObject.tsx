/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Importamos el loader para GLTF
import { gsap } from 'gsap';

interface positionCircle {
  x: number;
  y: number;
  z: number;
}

interface Props {
  currentSection: number;
  modelPath: string; // Prop para la ruta GLTF
  positionCircle?: positionCircle;
  positionCircleTwo?: positionCircle;
}

export default function CoinObject({ currentSection, modelPath, positionCircle, positionCircleTwo }: Props) {
  const coinRef: any = useRef();

  const gltf = useLoader(GLTFLoader, modelPath);

  const maxRotation = 0.1;
  const minRotation = -0.1;

  useFrame(() => {
    coinRef.current.rotation.y += (Math.random() - .5) * 0.05;
    coinRef.current.rotation.x += (Math.random() - .5) * 0.05;
    coinRef.current.rotation.z += (Math.random() - .5) * 0.05;

    if (coinRef.current.rotation.y > maxRotation) {
      coinRef.current.rotation.y = maxRotation;
    } else if (coinRef.current.rotation.y < minRotation) {
      coinRef.current.rotation.y = minRotation;
    }
    if (coinRef.current.rotation.z > maxRotation) {
      coinRef.current.rotation.z = maxRotation;
    } else if (coinRef.current.rotation.z < minRotation) {
      coinRef.current.rotation.z = minRotation;
    }
    if (coinRef.current.rotation.x > maxRotation) {
      coinRef.current.rotation.x = maxRotation;
    } else if (coinRef.current.rotation.x < minRotation) {
      coinRef.current.rotation.x = minRotation;
    }
  });


  useEffect(() => {
    if (coinRef.current) {
      if (currentSection === 1) {
        // Ocultar objeto en otras secciones
        gsap.to(coinRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0,
          ease: 'power3.out',
        });
      }
      if (currentSection === 2) {
        // Animación en sección 2
        gsap.to(coinRef.current.position, {
          x: positionCircle?.x,
          y: positionCircle?.y,
          z: positionCircle?.z,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.scale, {
          x: 1.7,
          y: 1.7,
          z: 1.7,
          duration: 1,
          ease: 'power3.out',
        });
      } else if (currentSection === 3) {
        // Animación en sección 3
        gsap.to(coinRef.current.position, {
          x: positionCircleTwo?.x,
          y: positionCircleTwo?.y,
          z: positionCircleTwo?.z,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(coinRef.current.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 1,
          ease: 'power3.out',
        });
      } else {
        // Ocultar objeto en otras secciones
        gsap.to(coinRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0,
          ease: 'power3.out',
        });
      }
    }
  }, [currentSection, positionCircle, positionCircleTwo]);

  return (
    <primitive ref={coinRef} object={gltf.scene} position={[0, 0, -2]} scale={[1.7, 1.7, 1.7]} />
  );
}
