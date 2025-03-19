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
  const refBelt = useRef<HTMLDivElement>(null);
  const refContainerAll = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    setTimeout(() => {
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          refBelt.current,
          {
            opacity: 0.3,
            x: 0,
          },
          {
            opacity: 1,
            x: "-60vw",
            scrollTrigger: {
              trigger: refBelt.current,
              start: "top center",
              end: "top 10%",
              scrub: 3,
              onLeave: () => {
                gsap.to(refBelt.current, { y: -20, scrollTrigger:{
                  scrub: 3
                } });
              },

              onEnterBack: () => {
                gsap.fromTo(refBelt.current, { y: -20 }, { y: 0, scrollTrigger:{
                  scrub: 3
                }});
              },
            },
          }
        );
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

        gsap.fromTo(
          refContainerAll.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.8,
            y: "-20%",
            scrollTrigger: {
              trigger: refContainerAll.current,
              start: "top top",
              end: "top top",
              scrub: 3,
            },
          }
        );
      });

      mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.fromTo(
          refBelt.current,
          {
            opacity: 0.3,
            x: 0,
          },
          {
            opacity: 1,
            x: "-90vw",
            scrollTrigger: {
              trigger: refBelt.current,
              start: "top 70%",
              end: "top 10%",
              scrub: 3,
              onLeave: () => {
                gsap.to(refBelt.current, { y: -20, scrollTrigger:{
                  scrub: 3
                } });
              },

              onEnterBack: () => {
                gsap.fromTo(refBelt.current, { y: -20 }, { y: 0, scrollTrigger:{
                  scrub: 3
                }});
              },
            },
          }
        );
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
              start: "top 50%",
              end: "top 35%",
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
              start: "top 65%",
              end: "top 50%",
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
              start: "top 52%",
              end: "top 47%",
              scrub: 1,
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

        gsap.fromTo(
          refContainerAll.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.8,
            y: "-20%",
            scrollTrigger: {
              trigger: refContainerAll.current,
              start: "top top",
              end: "top top",
              scrub: 3,
              markers:true
            },
          }
        );
      });

      mm.add("(max-width: 768px)", () => {

        gsap.fromTo(
          refBelt.current,
          {
            opacity: 0.3,
            x: 0,
          },
          {
            opacity: 1,
            x: "-150vw",
            scrollTrigger: {
              trigger: refBelt.current,
              start: "top 70%",
              end: "top 10%",
              scrub: 3,
              onLeave: () => {
                gsap.to(refBelt.current, { y: -20, scrollTrigger:{
                  scrub: 3
                } });
              },

              onEnterBack: () => {
                gsap.fromTo(refBelt.current, { y: -20 }, { y: 0, scrollTrigger:{
                  scrub: 3
                }});
              },
            },
          }
        );
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
              end: "top 40%",
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
              start: "top 55%",
              end: "top 40%",
              scrub: 1,
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
              start: "top 75%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          refContainerAll.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.8,
            y: "-20%",
            scrollTrigger: {
              trigger: refContainerAll.current,
              start: "top top",
              end: "top top",
              scrub: 3,
              markers:true
            },
          }
        );
      });
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
        <div ref={refContainerAll} className="flex flex-col gap-6">
          <div className="w-full overflow-hidden">
            <div ref={refBelt} className="w-full">
              <div
                className="relative flex gap-4 whitespace-nowrap"
              >
                <span className="text-white text-7xl font-lora inline-block animate-scroll">
                  Codifique. Crie. Evolua.
                </span>
                <span className="text-white absolute left-[780px] text-7xl font-lora inline-block animate-scroll">
                  -
                </span>
                <span className="text-white absolute left-[830px] text-7xl font-lora inline-block animate-scroll">
                  Codifique. Crie. Evolua.
                </span>
                <span className="text-white absolute left-[1610px] text-7xl font-lora inline-block animate-scroll">
                  -
                </span>
                <span className="text-white absolute left-[1660px] text-7xl font-lora inline-block animate-scroll">
                  Codifique. Crie. Evolua.
                </span>
              </div>
            </div>
          </div>
          <span
            ref={refTitle}
            className="font-inter text-subtitleColor text-sm font-normal leading-[.1] mt-[2rem]"
          >
            Conheça um pouco mais sobre mim
          </span>
          <div ref={refLine} className="w-full h-[1px]">
            <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
          </div>
          <div className="flex flex-col items-center w-full gap-[3rem] md:flex-row lg:flex-row">
            <div ref={refPhoto} className="w-full hidden md:block">
              <Image
                src="/photo.jpg"
                width={500}
                height={500}
                alt="Foto de Thiago"
                className="rounded-2xl md:w-[400px]"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-[1rem] lg:w-auto">
              <div ref={refTitleDescription} className="leading-none">
                <span className="text-middleGrayColor leading-none font-inter font-medium text-5xl md:text-3xl">
                  Olá, muito prazer!
                </span>
              </div>
              <div ref={refSubtitleDescription} className="md:w-[100%]">
                <span className="text-subtitleColor leading-none text-base">
                  Me chamo Thiago e sou um desenvolvedor Fullstack apaixonado
                  por tecnologia e inovação. Desde que comecei minha jornada na
                  programação, venho buscando não apenas aprimorar minhas
                  habilidades técnicas, mas também desenvolver a mentalidade de
                  um profissional capaz de resolver problemas reais e impactar
                  positivamente as pessoas com meu trabalho.
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
