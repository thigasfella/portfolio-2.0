"use client";
import Topbar from "@/view/components/topBar/Topbar";
import HomePage from "@/view/layouts/home/HomePage";
import { motion } from "framer-motion";
import ReactLenis from "lenis/react";
import ParticlesComponent from "@/view/components/particles/Particles";
import About from "@/view/layouts/about/About";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyStack from "@/view/layouts/myStack/MyStack";

export default function Home() {

  useGSAP(() => {
    setTimeout(() => {
        ScrollTrigger.normalizeScroll(true);
    }, 500)
  },[])

  return (
    <>

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
                  transition={{ duration: 2 }}
                >
                  <HomePage />
                </motion.div>
              </div>
            </section>
            
            <section className="min-h-[100vh]  bg-primary about">
              <div className="flex h-full flex-col container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <About />
                </motion.div>
              </div>
            </section>

            <section className="min-h-[100vh]  bg-primary about">
              <div className="flex h-full flex-col container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <MyStack />
                </motion.div>
              </div>
            </section>

            <section className="min-h-[100vh]  bg-primary about">
              <div className="flex h-full flex-col container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                </motion.div>
              </div>
            </section>

          </ReactLenis>
        </>
    </>
  );
}
