/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/modules/core/ui/button';
import { Section5 } from './section5/section5';
import { Section6 } from './section6/section6';
import { Section7 } from './section7/section7';
import { Section8 } from './section8/section8';
import { Section9 } from './section9/section9';

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = dynamic(() => import('./scene/ThreeScene'), {
  ssr: false, // Disable server-side rendering for Three.js
});

const HorizontalScroll = () => {
  const containerRef: any = useRef(null);
  const containerRef2: any = useRef(null);
  const sectionsRef: any = useRef([]);
  const sectionsRef2: any = useRef([]);
  const sectionsRefLast: any = useRef([]); // Referencias a todas las secciones
  const [currentSectionLast, setCurrentSectionLast] = useState<number | null>(null);

  const [isCheck, setCheck] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState(1); // Estado de la sección actual
  const [currentSection2, setCurrentSection2] = useState(0); // Estado de la sección actual
  const [isInViewContainerRef2, setIsInViewContainerRef2] = useState<boolean>(false);

  useGSAP(() => {
    const element: any = containerRef.current;
    const horizontalScroll2 = gsap.to(sectionsRef.current, {
      xPercent: -100 * (sectionsRef.current.length - 1), // Mueve horizontalmente las secciones
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1,
        snap: 1 / (sectionsRef.current.length - 1),
        end: () => `+=${element.offsetWidth * sectionsRef.current.length}`,
        onUpdate: (self) => {
          const currentIndex = Math.round(self.progress * (sectionsRef.current.length - 1)) + 1;
          setCurrentSection(currentIndex); // Actualiza la sección actual
        },
      },
    });
    return () => {
      horizontalScroll2.kill(); // Limpia el ScrollTrigger al desmontar
    };
  }, []);

  useGSAP(() => {
    const element: any = containerRef2.current;
    const horizontalScroll = gsap.to(sectionsRef2.current, {
      xPercent: -100 * (sectionsRef2.current.length - 1), // Mueve horizontalmente las secciones
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1,
        snap: 1 / (sectionsRef2.current.length - 1),
        end: () => `+=${element.offsetWidth * sectionsRef2.current.length}`,
        onUpdate: (self) => {
          const currentIndex = Math.round(self.progress * (sectionsRef2.current.length - 1)) + 1;
          setCurrentSection2(currentIndex); // Actualiza la sección actual
        },
      },
    });
    return () => {
      horizontalScroll.kill(); // Limpia el ScrollTrigger al desmontar
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let isInSection = false; // Variable para verificar si alguna sección está visible

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInSection = true; // Detectar si estamos en alguna sección
            const index = sectionsRefLast.current.findIndex(
              (section: Element) => section === entry.target
            );
            setCurrentSectionLast(index + 5); // +5 porque las secciones empiezan en la 5
          }
        });

        if (isInViewContainerRef2) {
          return setCurrentSectionLast(7);
        }
        if (!isInSection && !isInViewContainerRef2) {
          setCurrentSectionLast(0); // Si ninguna sección está visible, establecer 0
        }
      },
      {
        root: null, // Usa el viewport como referencia
        threshold: 0.5, // Considera visible cuando el 50% de la sección esté en el viewport
      }
    );
    sectionsRefLast.current.forEach((section: Element) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      sectionsRefLast.current.forEach((section: Element) => {
        if (section) {
          observer.unobserve(section);
        }
      });
      if (isInViewContainerRef2 === true) {
        setCurrentSectionLast(7);
      }
    };
  }, [isInViewContainerRef2]);

  const goToSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex); // Actualiza el estado de sección
    const containerWidth = containerRef.current.offsetWidth;
    const targetPosition = -(sectionIndex - 1) * containerWidth;
    gsap.to(sectionsRef.current, {
      x: targetPosition,
      duration: 1,
      ease: 'power3.out',
    });
    containerRef.current.scrollTo({
      left: targetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewContainerRef2(entry.isIntersecting); // Actualizar el estado según la visibilidad
      },
      { root: null, threshold: 0.5 } // Configuración del observer
    );
    if (containerRef2.current) {
      observer.observe(containerRef2.current);
    }
    return () => {
      if (containerRef2.current) {
        observer.unobserve(containerRef2.current);
      }
    };
  }, []);

  return (
    <div className='full-content'>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="banner-content"
      >
        {(currentSection === 2 || currentSection === 3) &&
          <div className={`content-good-heavens content-good-heavens-${currentSection}`}>
            <div className='content'>
              <div className="shadow"></div>
              <svg width="1353" height="169" viewBox="0 0 1353 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg svg-1">
                <path d="M79.607 5.70766C64.9799 12.3169 32.8003 39.0543 12.3223 62.1867C-3.14061 79.611 -3.97644 91.027 9.3969 92.5291C16.0836 93.13 22.7702 88.3232 38.6511 69.9976C49.9348 57.0795 67.4874 40.8568 77.0995 33.6467C111.369 9.31271 129.339 16.5228 192.027 81.1131C271.849 163.428 303.193 179.351 349.581 162.227C371.313 154.416 392.627 136.39 439.851 85.9199C492.509 29.1404 503.375 21.0291 525.106 21.0291C540.151 21.0291 571.077 45.3631 612.451 89.2245C685.169 166.433 721.945 182.655 769.588 158.922C787.976 149.609 813.051 127.378 856.933 81.1131C914.187 21.0291 925.889 14.4199 955.979 25.5354C970.606 30.943 987.323 45.6636 1030.37 91.9283C1071.74 136.09 1094.31 154.716 1115.21 162.227C1159.92 178.75 1192.94 163.128 1256.88 94.3316C1302.43 45.0627 1322.91 27.6383 1338.79 23.4325C1350.91 20.4283 1353 18.3253 1353 9.91354C1353 1.80219 1351.33 -0.000328649 1344.64 -0.000328649C1319.98 -0.000328649 1287.8 23.132 1232.22 81.1131C1177.47 138.193 1159.92 149.909 1137.77 146.004C1123.15 143.3 1096.82 122.571 1063.8 87.422C1001.95 21.3295 971.024 -0.000328649 937.591 -0.000328649C929.232 -0.000328649 916.695 2.10261 910.426 4.50598C892.455 11.1152 859.44 38.7539 821.41 79.0102C780.036 122.271 747.856 147.206 733.229 147.206C713.587 147.206 686.005 127.378 645.467 84.1174C604.929 41.1573 570.241 12.0165 549.764 4.20555C535.136 -1.20201 511.733 -1.20201 496.688 4.50598C478.3 11.1152 444.031 40.256 407.254 79.611C348.745 142.399 334.118 152.012 308.208 144.201C293.163 139.695 265.998 119.267 239.251 91.6279C167.37 17.4241 143.13 -0.000328649 110.115 -0.000328649C100.503 -0.000328649 87.1295 2.70345 79.607 5.70766Z" fill="#35D8D0" />
              </svg>
              <svg width="1353" height="169" viewBox="0 0 1353 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg svg-2">
                <path d="M79.607 5.70766C64.9799 12.3169 32.8003 39.0543 12.3223 62.1867C-3.14061 79.611 -3.97644 91.027 9.3969 92.5291C16.0836 93.13 22.7702 88.3232 38.6511 69.9976C49.9348 57.0795 67.4874 40.8568 77.0995 33.6467C111.369 9.31271 129.339 16.5228 192.027 81.1131C271.849 163.428 303.193 179.351 349.581 162.227C371.313 154.416 392.627 136.39 439.851 85.9199C492.509 29.1404 503.375 21.0291 525.106 21.0291C540.151 21.0291 571.077 45.3631 612.451 89.2245C685.169 166.433 721.945 182.655 769.588 158.922C787.976 149.609 813.051 127.378 856.933 81.1131C914.187 21.0291 925.889 14.4199 955.979 25.5354C970.606 30.943 987.323 45.6636 1030.37 91.9283C1071.74 136.09 1094.31 154.716 1115.21 162.227C1159.92 178.75 1192.94 163.128 1256.88 94.3316C1302.43 45.0627 1322.91 27.6383 1338.79 23.4325C1350.91 20.4283 1353 18.3253 1353 9.91354C1353 1.80219 1351.33 -0.000328649 1344.64 -0.000328649C1319.98 -0.000328649 1287.8 23.132 1232.22 81.1131C1177.47 138.193 1159.92 149.909 1137.77 146.004C1123.15 143.3 1096.82 122.571 1063.8 87.422C1001.95 21.3295 971.024 -0.000328649 937.591 -0.000328649C929.232 -0.000328649 916.695 2.10261 910.426 4.50598C892.455 11.1152 859.44 38.7539 821.41 79.0102C780.036 122.271 747.856 147.206 733.229 147.206C713.587 147.206 686.005 127.378 645.467 84.1174C604.929 41.1573 570.241 12.0165 549.764 4.20555C535.136 -1.20201 511.733 -1.20201 496.688 4.50598C478.3 11.1152 444.031 40.256 407.254 79.611C348.745 142.399 334.118 152.012 308.208 144.201C293.163 139.695 265.998 119.267 239.251 91.6279C167.37 17.4241 143.13 -0.000328649 110.115 -0.000328649C100.503 -0.000328649 87.1295 2.70345 79.607 5.70766Z" fill="#35D8D0" />
              </svg>
              <svg width="1353" height="169" viewBox="0 0 1353 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg svg-3">
                <path d="M79.607 5.70766C64.9799 12.3169 32.8003 39.0543 12.3223 62.1867C-3.14061 79.611 -3.97644 91.027 9.3969 92.5291C16.0836 93.13 22.7702 88.3232 38.6511 69.9976C49.9348 57.0795 67.4874 40.8568 77.0995 33.6467C111.369 9.31271 129.339 16.5228 192.027 81.1131C271.849 163.428 303.193 179.351 349.581 162.227C371.313 154.416 392.627 136.39 439.851 85.9199C492.509 29.1404 503.375 21.0291 525.106 21.0291C540.151 21.0291 571.077 45.3631 612.451 89.2245C685.169 166.433 721.945 182.655 769.588 158.922C787.976 149.609 813.051 127.378 856.933 81.1131C914.187 21.0291 925.889 14.4199 955.979 25.5354C970.606 30.943 987.323 45.6636 1030.37 91.9283C1071.74 136.09 1094.31 154.716 1115.21 162.227C1159.92 178.75 1192.94 163.128 1256.88 94.3316C1302.43 45.0627 1322.91 27.6383 1338.79 23.4325C1350.91 20.4283 1353 18.3253 1353 9.91354C1353 1.80219 1351.33 -0.000328649 1344.64 -0.000328649C1319.98 -0.000328649 1287.8 23.132 1232.22 81.1131C1177.47 138.193 1159.92 149.909 1137.77 146.004C1123.15 143.3 1096.82 122.571 1063.8 87.422C1001.95 21.3295 971.024 -0.000328649 937.591 -0.000328649C929.232 -0.000328649 916.695 2.10261 910.426 4.50598C892.455 11.1152 859.44 38.7539 821.41 79.0102C780.036 122.271 747.856 147.206 733.229 147.206C713.587 147.206 686.005 127.378 645.467 84.1174C604.929 41.1573 570.241 12.0165 549.764 4.20555C535.136 -1.20201 511.733 -1.20201 496.688 4.50598C478.3 11.1152 444.031 40.256 407.254 79.611C348.745 142.399 334.118 152.012 308.208 144.201C293.163 139.695 265.998 119.267 239.251 91.6279C167.37 17.4241 143.13 -0.000328649 110.115 -0.000328649C100.503 -0.000328649 87.1295 2.70345 79.607 5.70766Z" fill="#35D8D0" />
              </svg>
              <svg width="1353" height="169" viewBox="0 0 1353 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg svg-4">
                <path d="M79.607 5.70766C64.9799 12.3169 32.8003 39.0543 12.3223 62.1867C-3.14061 79.611 -3.97644 91.027 9.3969 92.5291C16.0836 93.13 22.7702 88.3232 38.6511 69.9976C49.9348 57.0795 67.4874 40.8568 77.0995 33.6467C111.369 9.31271 129.339 16.5228 192.027 81.1131C271.849 163.428 303.193 179.351 349.581 162.227C371.313 154.416 392.627 136.39 439.851 85.9199C492.509 29.1404 503.375 21.0291 525.106 21.0291C540.151 21.0291 571.077 45.3631 612.451 89.2245C685.169 166.433 721.945 182.655 769.588 158.922C787.976 149.609 813.051 127.378 856.933 81.1131C914.187 21.0291 925.889 14.4199 955.979 25.5354C970.606 30.943 987.323 45.6636 1030.37 91.9283C1071.74 136.09 1094.31 154.716 1115.21 162.227C1159.92 178.75 1192.94 163.128 1256.88 94.3316C1302.43 45.0627 1322.91 27.6383 1338.79 23.4325C1350.91 20.4283 1353 18.3253 1353 9.91354C1353 1.80219 1351.33 -0.000328649 1344.64 -0.000328649C1319.98 -0.000328649 1287.8 23.132 1232.22 81.1131C1177.47 138.193 1159.92 149.909 1137.77 146.004C1123.15 143.3 1096.82 122.571 1063.8 87.422C1001.95 21.3295 971.024 -0.000328649 937.591 -0.000328649C929.232 -0.000328649 916.695 2.10261 910.426 4.50598C892.455 11.1152 859.44 38.7539 821.41 79.0102C780.036 122.271 747.856 147.206 733.229 147.206C713.587 147.206 686.005 127.378 645.467 84.1174C604.929 41.1573 570.241 12.0165 549.764 4.20555C535.136 -1.20201 511.733 -1.20201 496.688 4.50598C478.3 11.1152 444.031 40.256 407.254 79.611C348.745 142.399 334.118 152.012 308.208 144.201C293.163 139.695 265.998 119.267 239.251 91.6279C167.37 17.4241 143.13 -0.000328649 110.115 -0.000328649C100.503 -0.000328649 87.1295 2.70345 79.607 5.70766Z" fill="#35D8D0" />
              </svg>
              <svg width="1353" height="169" viewBox="0 0 1353 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg svg-5">
                <path d="M79.607 5.70766C64.9799 12.3169 32.8003 39.0543 12.3223 62.1867C-3.14061 79.611 -3.97644 91.027 9.3969 92.5291C16.0836 93.13 22.7702 88.3232 38.6511 69.9976C49.9348 57.0795 67.4874 40.8568 77.0995 33.6467C111.369 9.31271 129.339 16.5228 192.027 81.1131C271.849 163.428 303.193 179.351 349.581 162.227C371.313 154.416 392.627 136.39 439.851 85.9199C492.509 29.1404 503.375 21.0291 525.106 21.0291C540.151 21.0291 571.077 45.3631 612.451 89.2245C685.169 166.433 721.945 182.655 769.588 158.922C787.976 149.609 813.051 127.378 856.933 81.1131C914.187 21.0291 925.889 14.4199 955.979 25.5354C970.606 30.943 987.323 45.6636 1030.37 91.9283C1071.74 136.09 1094.31 154.716 1115.21 162.227C1159.92 178.75 1192.94 163.128 1256.88 94.3316C1302.43 45.0627 1322.91 27.6383 1338.79 23.4325C1350.91 20.4283 1353 18.3253 1353 9.91354C1353 1.80219 1351.33 -0.000328649 1344.64 -0.000328649C1319.98 -0.000328649 1287.8 23.132 1232.22 81.1131C1177.47 138.193 1159.92 149.909 1137.77 146.004C1123.15 143.3 1096.82 122.571 1063.8 87.422C1001.95 21.3295 971.024 -0.000328649 937.591 -0.000328649C929.232 -0.000328649 916.695 2.10261 910.426 4.50598C892.455 11.1152 859.44 38.7539 821.41 79.0102C780.036 122.271 747.856 147.206 733.229 147.206C713.587 147.206 686.005 127.378 645.467 84.1174C604.929 41.1573 570.241 12.0165 549.764 4.20555C535.136 -1.20201 511.733 -1.20201 496.688 4.50598C478.3 11.1152 444.031 40.256 407.254 79.611C348.745 142.399 334.118 152.012 308.208 144.201C293.163 139.695 265.998 119.267 239.251 91.6279C167.37 17.4241 143.13 -0.000328649 110.115 -0.000328649C100.503 -0.000328649 87.1295 2.70345 79.607 5.70766Z" fill="#35D8D0" />
              </svg>
            </div>
          </div>
        }
        <ThreeScene currentSection={currentSection} isCheck={isCheck} setCheck={setCheck} />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            height: '100%',
            zIndex: '2000'
          }}
        >
          <section ref={(el) => { sectionsRef.current[0] = el; }}>
            <Section1 />
          </section>
          <section ref={(el) => { sectionsRef.current[1] = el; }}>
            <Section2 />
          </section>
          <section ref={(el) => { sectionsRef.current[2] = el; }}>
            <Section3 currentSection={currentSection} />
          </section>
          <section ref={(el) => { sectionsRef.current[3] = el; }}>
            <Section4 />
          </section>
        </div>
        {/* Mostrar la sección actual */}
        <div className="steps">
          <div className='container'>
            <div className="steps-items">
              <Button onClick={() => goToSection(1)} className={`step step-1 ${currentSection === 1 ? 'active' : ''}`}></Button>
              <Button onClick={() => goToSection(2)} className={`step step-2 ${currentSection === 2 ? 'active' : ''}`}></Button>
              <Button onClick={() => goToSection(3)} className={`step step-3 ${currentSection === 3 ? 'active' : ''}`}></Button>
              <Button onClick={() => goToSection(4)} className={`step step-4 ${currentSection === 4 ? 'active' : ''}`}></Button>
            </div>
            <Image src="/mause-scroll.svg" width={30} height={40} alt="mause" />
          </div>
        </div>
      </div>
      {currentSectionLast !== null && currentSectionLast !== 0 &&
        <div className='stepss'>
          <Button className={`step ${currentSectionLast === 5 && 'step-active'}`}></Button>
          <Button className={`step ${currentSectionLast === 6 && 'step-active'}`}></Button>
          <Button className={`step ${currentSectionLast === 7 && 'step-active'}`}></Button>
          <Button className={`step ${currentSectionLast === 8 && 'step-active'}`}></Button>
        </div>
      }
      <section ref={(el) => { sectionsRefLast.current[0] = el; }}>
        <Section5 />
      </section>
      <section ref={(el) => { sectionsRefLast.current[1] = el; }}>
        <Section6 />
      </section>
      <div
        ref={containerRef2}
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="banner-content banner-content-2"
      >
        <div className={`image-piaa ${currentSection2 === 2 && 'image-piaa-sec-2'}`}>
          <Image
            src={'/piaa.png'}
            height={421}
            width={407}
            alt='piaa'
            className='mt-40'
          />
        </div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            height: '100%',
            zIndex: '2000'
          }}
        >
          <section ref={(el) => { sectionsRef2.current[0] = el; }}>
            <Section7 />
          </section>
          <section ref={(el) => { sectionsRef2.current[1] = el; }}>
            <Section8 />
          </section>
        </div>
      </div>
      <section ref={(el) => { sectionsRefLast.current[3] = el; }}>
        <Section9 />
      </section>
    </div>
  );
};

export default HorizontalScroll;
