/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import * as THREE from 'three';  // Importamos THREE para el color

interface Props {
  currentSection: number
}

export default function ThreeObject({ currentSection }: Props) {
  const meshRef: any = useRef();

  // Cargar el modelo GLTF usando useLoader
  const gltf = useLoader(GLTFLoader, '/textures/Hoja-berry-3D.gltf');

  // Configurar el color del objeto y habilitar sombras
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          // Configurar material y sombras
          child.material = new THREE.MeshStandardMaterial({ color: '#01ffff' });
          child.castShadow = true; // Habilitar proyección de sombras
          child.receiveShadow = false; // El objeto no recibe sombras, solo las proyecta
        }
      });
    }
  }, [gltf]);

  // Animación constante de arriba hacia abajo
  useFrame(() => {
    if (meshRef.current) {
      // Movimiento muy mínimo en el eje Y
      meshRef.current.position.y += Math.sin(Date.now() * 0.019) * 0.0001;
    }
  });

  useEffect(() => {
    gsap.to(meshRef.current.position, {
      duration: 2,
      ease: 'power3.out',
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      const scrollProgress = scrollPosition / viewportHeight;
      // if (meshRef.current) {
      if (currentSection === 1) {

        gsap.to(meshRef.current.position, {
          x: 3,
          y: -2.5,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(meshRef.current.scale, {
          x: 3 + scrollProgress,  // Incrementa la escala en función del scroll
          y: 3 + scrollProgress,  // Incrementa la escala en función del scroll
          z: 1.5 + scrollProgress * 0.5,  // Incremento en z un poco más lento
          duration: 0.5,
          ease: 'power3.out',
        });
      } else if (currentSection === 2) {
        gsap.to(meshRef.current.scale, {
          x: 2,
          y: 2,
          z: 0.5,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(meshRef.current.position, {
          x: 0,
          y: -2,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        });
      } else if (currentSection === 3) {
        gsap.to(meshRef.current.position, {
          x: -3,
          y: -1.5,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(meshRef.current.scale, {
          x: 2,
          y: 2,
          z: 0.5,
          duration: 1,
          ease: 'power3.out',
        });
      } else if (currentSection === 4) {
        gsap.to(meshRef.current.position, {
          x: -17,
          duration: 1,
          ease: 'power3.out',
        });
        gsap.to(meshRef.current.scale, {
          x: 0.5,
          y: 0.5,
          z: 0.5,
          duration: .5,
          ease: 'power3.out',
        });
      }
      // }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <primitive ref={meshRef} object={gltf.scene} position={[3, -2.5, 0]} scale={[3, 3, 1.5]} />
  );
}