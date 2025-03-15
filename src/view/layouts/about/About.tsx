import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const refTitle = useRef<HTMLDivElement>(null);
  const refLine = useRef<HTMLDivElement>(null);
  const refTitleDescription = useRef<HTMLDivElement>(null);
  const refSubtitleDescription = useRef<HTMLDivElement>(null);
  const refPhoto = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.fromTo(
        refTitle.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 40%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refLine.current,
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: refLine.current,
            start: "top 40%",
            end: "top 25%",
            scrub: 1,
            markers: true
          },
        }
      );

      gsap.fromTo(
        refPhoto.current,
        {
          y: "20%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: refPhoto.current,
            start: "top center",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refTitleDescription.current,
        {
          x: "-10%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: refTitleDescription.current,
            start: "top center",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refSubtitleDescription.current,
        {
          x: "-10%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: refSubtitleDescription.current,
            start: "top center",
            end: "top 35%",
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
      <div className="h-full w-full">
        <div className="flex flex-col gap-6">
          <span
            ref={refTitle}
            className="font-inter text-subtitleColor text-sm font-normal leading-[.1]"
          >
            Conheça um pouco mais sobre mim
          </span>
          <div ref={refLine} className="w-full h-[1px]">
            <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
          </div>
        <div className="flex flex-col items-center w-full gap-[3rem] lg:flex-row">
          <div ref={refPhoto} className="w-full z-10">
            <img src="/photo.jpg" alt="Foto de Thiago" className="rounded-2xl w-[20rem]"/>
          </div>

          <div className="w-[100%] flex flex-col gap-[1rem] lg:w-auto">
            <div ref={refTitleDescription} className="text-lightText">
              <span className=" font-inter font-extrabold text-5xl md:text-3xl">Olá, muito prazer!</span>
            </div>
            <div ref={refSubtitleDescription} className="text-justify md:w-[80%]">
              <span className="text-subtitleColor text-base">Sou um desenvolvedor Fullstack apaixonado por tecnologia e inovação. 
                Desde que comecei minha jornada na programação, venho buscando não apenas 
                aprimorar minhas habilidades técnicas, mas também desenvolver a mentalidade 
                de um profissional capaz de resolver problemas reais e impactar positivamente 
                as pessoas com meu trabalho. <br /><br />
                Meu objetivo como desenvolvedor é crescer constantemente, me tornando um 
                profissional cada vez mais completo e preparado para desafios de alto nível. 
                Quero trabalhar em projetos inovadores, onde eu possa aprender, colaborar com 
                pessoas incríveis e construir soluções eficientes, escaláveis e que realmente 
                façam a diferença.</span>
                
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
