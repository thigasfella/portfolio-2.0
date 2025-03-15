"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const refTitle = useRef<HTMLDivElement>(null);
  const refDescription = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.fromTo(
        refTitle.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0.3,
          y: -50,
          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 10vh",
            end: "top top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refDescription.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0.3,
          y: -50,
          scrollTrigger: {
            trigger: refDescription.current,
            start: "top 20vh",
            end: "top top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refBtn.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0.3,
          y: -50,
          scrollTrigger: {
            trigger: refBtn.current,
            start: "top 20vh",
            end: "top 10vh",
            scrub: 1,
          },
        }
      );
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div id="initial" className="flex flex-col w-full h-full gap-4">
        <div className="flex flex-col w-full h-full gap-4">
          <div className="flex flex-col gap-6">
            <div ref={refTitle} id="title">
              <h1 className="text-5xl lg:text-7xl relative mx-auto font-anton text-justify leading-[.95] text-generalText">
                FULLSTACK
              </h1>
              <h1 className="text-5xl lg:text-7xl relative mx-auto font-anton leading-[.95] text-lightText ml-6">
                DEVELOPER
              </h1>
            </div>

            <div
              id="description"
              ref={refDescription}
              className="w-[100%] lg:w-[80%]"
            >
              <span className="text-base font-normal font-inter mx-auto text-justify text-subtitleColor w-full leading-[.95]">
                Olá! Meu nome é{" "}
                <span className="font-medium text-lightText">Thiago</span> e sou
                um desenvolvedor fullstack. Com mais de um ano de experiência em
                desenvolvimento web, estou sempre em busca de aprimoramento,
                explorando novas tecnologias e criando soluções inovadoras.
              </span>
            </div>

            <div className="w-[15rem]" ref={refBtn} id="btn">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-generalText mt-4 text-primary font-anton text-xl w-full tracking-widest"
              >
                  CONTATE-ME
              </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
