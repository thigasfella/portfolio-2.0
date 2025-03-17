"use client";
import Topbar from "@/view/components/topBar/Topbar";
import HomePage from "@/view/layouts/home/HomePage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import ParticlesComponent from "@/view/components/particles/Particles";
import About from "@/view/layouts/about/About";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  const [showMsgApresentation, setShowMsgApresentation] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(true);

    useEffect(() => {
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 3000);

      const removeMsgTimer = setTimeout(() => {
        setShowMsgApresentation(false);
      }, 4000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeMsgTimer);
      };
    }, []);

  useGSAP(() => {
    setTimeout(() => {
        ScrollTrigger.normalizeScroll(true);
    }, 500)
  },[])

  return (
    <>
      {showMsgApresentation && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={isFadingOut ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-primary"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: -100 }}
            animate={
              isFadingOut ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }
            }
            transition={{
              duration: 1,
              type: "spring",
              visualDuration: 0.5,
              spiffy: 0.5,
            }}
            className="flex flex-col items-center justify-center h-[100vh] w-[100vw] p-16"
          >
            <span className="text-[8rem] md:text-[10rem] lg:text-[15rem] font-anton text-white font-light leading-[.95]">
              THIAGO
            </span>
            <span className="text-xl font-normal font-inter mx-auto text-justify text-subtitleColor leading-[.95]">
              Seja bem-vindo ao meu portfólio. Aqui você encontrará um pouco
              sobre mim e meus projetos.
            </span>
          </motion.div>
        </motion.div>
      )}
      {!showMsgApresentation && (
        <>
          <Topbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <ParticlesComponent />
          </motion.div>
          <ReactLenis root
          >
            <section className="min-h-[100vh] bg-primary introducing ">
              <div className="flex h-[100vh] flex-col items-center justify-center container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <HomePage />
                </motion.div>
              </div>
            </section>

            <section className="min-h-[100vh]  bg-primary about">
              <div className="flex h-[100vh] flex-col container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <About />
                </motion.div>
              </div>
            </section>

          </ReactLenis>
        </>
      )}
    </>
  );
}
