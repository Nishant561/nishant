import React, { useEffect, useState } from "react";
import "../../App.css";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

import icons from '../../assets/mages/icons.svg'
import hello from '../../assets/mages/hello.png'
import JavaScriptlogo from '../../assets/mages/JavaScriptlogo.png'
import node from '../../assets/mages/node.jpg'
import express from '../../assets/mages/express.png'
import tailwind from '../../assets/mages/tailwind.jpg'
import gsap from '../../assets/mages/gsap.jpg'
import nishant from '../../assets/mages/nishant.jpg'
import about from '../../assets/mages/about.webp'
import rounded from '../../assets/mages/rounded.svg'
import carrental from '../../assets/mages/carrental.png'
import portfolio from '../../assets/mages/portfolio.png'
import { GrMapLocation } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";



import react from '../../assets/mages/react.svg'

function Home() {
  const [date , setDate] = useState('')


  useEffect(()=>{
    const data = new Date()
   setDate(data.getFullYear()) 
  })

  return (
    <>
      <div
        
       id="Home" style={{scrollMarginTop:'84px'}} className="w-full pb-[3rem]   bg-[#f9f9f9]"
      >
        <div className="w-[75%] mx-auto  pt-12 flex flex-col justify-center     ">
          <div className="flex justify-between items-center text-[#2d2e32] 1108:flex-col 1108:text-center ">
            <div className="w-[45%] 1108:order-2 1108:w-full ">
              <div className=" 1108:pt-6">
                <h1 className="text-6xl font-extrabold 540:text-3xl">
                  Front-End React Developer <img className="w-[50px] h-[50px] inline-block" src={hello} />
                </h1>
                <p className="py-7 text-xl 540:text-[17px] 540:leading-6">
                  Hi, I'm Nishant (Nirmal) Baruwal. A passionate Front-end React
                  Developer based in Kathmandu, Nepal. 📍
                </p>
                <div>
                  <div className="flex gap-4 1108:w-full 1108:justify-center">
                    <IconContext.Provider
                      value={{
                        className:
                          "w-[40px] cursor-pointer h-[40px] hover:text-[#147efb]  transition-colors ease-linear duration-150 cursor-pointer] ",
                      }}
                    >
                      <a target="_blank" href="https://www.linkedin.com/in/nishant-baruwal-3a3b2a227/" className="">
                        <CiLinkedin />
                      </a>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        className:
                          "w-[40px] h-[40px] hover:text-[#147efb] transition-colors ease-linear duration-150 cursor-pointer",
                      }}
                    >
                      <a target="_blank" href="https://github.com/Nishant561" className="">
                        <FaGithub />
                      </a>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] wave overflow-hidden 1108:order-1 540:w-[200px] 540:h-[200px]">
              <img
                src={nishant}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex w-full gap-6 items-center  mt-[6.25rem] 523:flex-col">
          <div className="pr-5 inline-block border-r-2">
            <h4 className="text-2xl font-semibold">Tech Stack</h4>
          </div>

          <div className="flex items-center gap-7 flex-wrap 523:w-full 523:justify-center">
            <div className="w-[100px] overMe hell">
                <img src={icons} className="w-full" />
            </div>
            <div className="w-[100px] flex gap-2 overMe hell">
                <img src={JavaScriptlogo} className="w-[48px] rounded-md" />
                <img src={react} className="w-[48px] rounded-md" />
            </div>
            <div className="w-[107px] flex gap-2 overMe hell">
                <img src={node} className="w-[55px] rounded-md object-contain object-center" />
                <img src={express} className="w-[55px] rounded-md object-cover object-center" />
            </div>

            <div className="w-[100px] flex gap-2 overMe hell">
                <img src={tailwind} className="w-[48px] rounded-md" />
                <img src={gsap} className="w-[48px] rounded-md" />
            </div>
          </div>
        </div>

        </div>

        
      </div>

    
    <div id="About" style={{scrollMarginTop:'84px'}} className="w-full h-screen  flex justify-center items-center">
                        <div className="flex w-[75%] gap-20 mx-auto 1180:flex-col 1180:items-center 445:gap-10 ">
                            <div style={{backgroundImage:`url(${about})` ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover'}} className="w-[435px] flex-none  relative rounded-lg h-[300px] 650:w-[300px] 650:h-[200px] ">
                               
                                <div className="w-[129px] h-[129px] bg-white absolute right-[-11%] bottom-[-17%] rounded-full 670:hidden ">
                                            <img className="round" src={rounded} />
                                </div>
                            </div>
                        <div className="w-[600px] 650:w-[87%] 650:text-center">
                                <h1 className="text-[#147efb] font-bold text-2xl">About Me</h1>
                                <h1 className="text-4xl font-extrabold py-6 text-[#2d2e32] 645:text-2xl 445:text-xl">Front-end Developer
                                based in Kathmandu, Nepal 📍</h1>
                                <p className="text-[17px] text-[#2d2e32] 445:text-xs">Hey, my name is Nishant, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
                                </p>
                                <p className="py-7 text-[17px] text-[#2d2e32] 445:text-xs 445:py-4">My main stack currently is React JS in combination with Tailwind CSS and GSAP.</p>
                        </div>
                        </div>
    </div>



    <div id="Projects" style={{scrollMarginTop:'84px'}} className="w-full bg-[#f9f9f9] py-5 flex flex-col gap-16">
                      <div className="flex w-[75%] mx-auto justify-between 742:flex-col 742:gap-4">
                        <div>
                                <h1 className="text-2xl text-[#147efb] font-bold">Car Rental</h1>
                                <p className="text-[#2d2e32] text-xl">Car rental is the website where you can find the best deals of car.</p>
                        </div>
                        <a target="_blank" href="https://nishant561.github.io/carrental/">
                            <img className="w-[360px]  object-contain" src={carrental} />
                        </a>
                      </div>
                      <div className="flex w-[75%] mx-auto justify-between 742:flex-col 742:gap-4">
                        <div>
                                <h1 className="text-2xl text-[#147efb] font-bold">Portfolio</h1>
                                <p className="text-[#2d2e32] text-xl">Portfolio website for my friend.</p>
                        </div>
                        <a target="_blank" href="https://sujata560.github.io/portfolio/">
                            <img className="w-[360px]  object-contain" src={portfolio} />
                        </a>
                      </div>

                      <h1 className="text-4xl font-extrabold text-center text-[#2d2e32]">More Project Comming Soon...</h1>
    </div>


    <div id="Contact" style={{scrollMarginTop:'84px'}} className="w-full h-[500px] py-6 flex items-center justify-center 793:h-auto">
        <div className="w-[75%] mx-auto 793:flex 793:flex-col items-center">
                <h1 className="font-extrabold text-2xl text-[#147efb]">Contact</h1>
                <h1 className="font-extrabold text-3xl pt-6 text-[#2d2e32] 793:text-center">Don't be shy! Hit me up! 👇</h1>
                <div className="flex gap-[6.5rem]  mt-[5rem] 793:flex-col ">
                    <div className="flex flex-col items-center">
                      <div className="p-2 shadowHero border-2 rounded-full inline-block">
                        <IconContext.Provider value={{className:"w-[40px] h-[40px]  "}}>
                            <GrMapLocation />
                        </IconContext.Provider>

                      </div>

                      <div className="pt-3">
                          <h1 className="font-bold text-xl text-[#2d2e32] text-center">Location</h1>
                          <p className="pt-2 text-xl text-zinc-500">Kathmandu, Nepal</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-2   shadowHero border-2 rounded-full inline-block">
                        <IconContext.Provider value={{className:"w-[40px] h-[40px]  "}}>
                            <IoMdMail />
                        </IconContext.Provider>

                      </div>

                      <div className="pt-3">
                          <h1 className="font-bold text-xl text-[#2d2e32] text-center">Mail</h1>
                          <a href="mailto:nishantbaruwal560@gmail.com" className="pt-2 text-xl text-zinc-500 793:text-wrap ">nishantbaruwal560@gmail.com</a>
                      </div>
                    </div>
                </div>
        </div>
    </div>


    <footer className="w-full h-[150px] bg-[#555555] flex justify-center items-center ">
                      <div className="w-[75%] mx-auto text-white flex justify-between flex-wrap 650:flex-col 650:items-center">
                            <p className="font-bold text-2xl 650:text-center 650:text-xl">Copyright © {date}. All rights are reserved</p>

                            <div className="flex gap-3">
                            <div className="flex gap-4 1108:w-full 1108:justify-center 650:pt-5">
                    <IconContext.Provider
                      value={{
                        className:
                          "w-[40px] cursor-pointer h-[40px] hover:scale-125 transition-transform ease-linear duration-150 cursor-pointer] ",
                      }}
                    >
                      <a target="_blank" href="https://www.linkedin.com/in/nishant-baruwal-3a3b2a227/" className="">
                        <CiLinkedin />
                      </a>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        className:
                          "w-[40px] h-[40px] hover:scale-125 transition-transform ease-linear duration-150 cursor-pointer",
                      }}
                    >
                      <a target="_blank" href="https://github.com/Nishant561" className="">
                        <FaGithub />
                      </a>
                    </IconContext.Provider>
                  </div>
                            </div>
                      </div>
    </footer>


    </>
  );
}

export default Home;
