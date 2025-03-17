import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const refTitle = useRef<HTMLDivElement>(null);
  const refLine = useRef<HTMLDivElement>(null);
  const refTitleDescription = useRef<HTMLDivElement>(null);
  const refSubtitleDescription = useRef<HTMLDivElement>(null);
  const refPhoto = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    setTimeout(() => {
       mm.add("(min-width: 1024px)", () => {
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
               start: "top 55%",
               end: "top 50%",
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
               start: "top 55%",
               end: "top 50%",
               scrub: 1,
             },
           }
         );
  
         gsap.fromTo(
           refPhoto.current,
           {
             opacity: 0,
             y: "20%",
           },
           {
             opacity: 1,
             y: 0,
             scrollTrigger: {
               trigger: refPhoto.current,
               start: "top 60%",
               end: "top 55%",
               scrub: 1,
               markers: true
             },
           }
         );
  
         gsap.fromTo(
           refTitleDescription.current,
           {
             y: "-20%",
             opacity: 0,
           },
           {
             y: 0,
             opacity: 1,
             scrollTrigger: {
               trigger: refTitleDescription.current,
               start: "top 60%",
               end: "top 55%",
               scrub: 1,
               markers: true
             },
           }
         );
  
         gsap.fromTo(
           refSubtitleDescription.current,
           {
             y: "20%",
             opacity: 0,
           },
           {
             y: 0,
             opacity: 1,
             scrollTrigger: {
               trigger: refSubtitleDescription.current,
               start: "top 70%",
               end: "top 65%",
               scrub: 1,
             },
           }
         );
       })


       mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
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
              scrub: 1
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
              start: "top 45%",
              end: "top 40%",
              scrub: 1
            },
          }
        );
 
        gsap.fromTo(
          refPhoto.current,
          {
            opacity: 0,
            y: "20%",
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: refPhoto.current,
              start: "top center",
              end: "top 35%",
              scrub: 1
            },
          }
        );
        gsap.fromTo(
          refTitleDescription.current,
          {
            y: "-20%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: refTitleDescription.current,
              start: "top 42%",
              end: "top 37%",
              scrub: 1
            },
          }
        );
 
        gsap.fromTo(
          refSubtitleDescription.current,
          {
            y: "20%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: refSubtitleDescription.current,
              start: "top 60%",
              end: "top 55%",
              scrub: 1
            },
          }
        );
      })


      mm.add("(max-width: 768px)", () => {
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
              start: "top 45%",
              end: "top 30%",
              scrub: 1
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
              start: "top 45%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
        gsap.fromTo(
          refTitleDescription.current,
          {
            y: "-20%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: refTitleDescription.current,
              start: "top 45%",
              end: "top 30%",
              scrub: 1
            },
          }
        );
 
        gsap.fromTo(
          refSubtitleDescription.current,
          {
            y: "20%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: refSubtitleDescription.current,
              start: "top 65%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      })
      
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="">
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
        <div className="flex flex-col items-center w-full gap-[3rem] md:flex-row lg:flex-row">
          <div ref={refPhoto} className="w-full hidden md:block">
            <Image src="/photo.jpg" width={500} height={500} alt="Foto de Thiago" className="rounded-2xl md:w-[400px]"/>
          </div>

          <div className="w-[100%] flex flex-col gap-[1rem] lg:w-auto">
            <div ref={refTitleDescription} className="leading-none">
              <span className="text-middleGrayColor leading-none font-inter font-medium text-5xl md:text-3xl">Olá, muito prazer!</span>
            </div>
            <div ref={refSubtitleDescription} className="md:w-[100%]">
              <span className="text-subtitleColor leading-none text-base">Me chamo Thiago e sou um desenvolvedor Fullstack apaixonado por tecnologia e inovação. 
                Desde que comecei minha jornada na programação, venho buscando não apenas 
                aprimorar minhas habilidades técnicas, mas também desenvolver a mentalidade 
                de um profissional capaz de resolver problemas reais e impactar positivamente 
                as pessoas com meu trabalho.</span>
                
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
