


'use client'
import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";





function Home() {

  useEffect(()=>{
 AOS.init();
},[]);


  return (

    <div className="">

      <div className="bg-green-200">

        <div className="  flex justify-between lg:px-15">
          <div className="px-5 lg:px-18 mt-15 mb-15 w-full ">

            <p className="text-sm text-black">Common Questions About Solink</p>

            <h1 className="text-4xl font-bold  text-black ">Making Home </h1>
            <h1 className="text-4xl font-bold text-black">Owner Ship</h1>
            <h1 className="text-4xl font-bold text-black">Simple Easy</h1>


            <div className="mt-10 flex gap-10">

              <button className="bg-white rounded-3xl w- flex items-center px-1.5 gap-1.5">
                <p className="text-black text-sm">Get in touch</p>
                <span className="bg-black rounded-full">
                  <IoIosArrowForward color="" size={20} />
                </span>
              </button>



              <button className="bg-green-900 rounded-3xl h-10 flex items-center px-1.5 gap-1.5">
                <p className="text-white text-sm">Red More</p>
                <span className="bg-white rounded-full">
                  <IoIosArrowForward size={20} color="black" />
                </span>
              </button>

            </div>


          </div>

          <div className="mt-5 ">
            <img src="/images/download (5).jpg" alt="" className="h-100 rounded-4xl w-300" />
          </div>


        </div>



        <Marquee className="mt-10">
          <p className="text-black"> Welcome to my portfolio website</p>
        </Marquee>


      </div>


      <div className="bg-white flex justify-between lg:px-15 mt-5">
        <p className="text-sm font-bold">Who are we</p>

        <div>
          <h1 className="text-2xl font-bold ">We develop quality infastructuer and real</h1>
          <h1 className="text-2xl font-bold ">estate projects since 1999</h1>
        </div>
      </div>


      <div className="flex justify-between lg:px-15 mt-5" data-aos="fade-up">
        <div className="flex bg-gray-200 shadow-xl items-center rounded-xl lg:px-5">

          <div>
            <p className="text-sm font-semibold text-grat-400">Our Mission</p>
            <h1 className="text-3xl font-bold">Work and Leisure</h1>
            <h1 className="text-3xl font-bold">Enviroments</h1>
            <p className="text-gray-500 text-sm font-semibold">Lorem ipsum dolor sit amet consectetur </p>
            <p className="text-gray-500 text-sm font-semibold">Lorem ipsum dolor sit amet consectetur </p>
            <p className="text-gray-500 text-sm font-semibold">Lorem ipsum dolor sit amet consectetur </p>
            <p className="text-gray-500 text-sm font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div>
            <img src="/images/Luxury_lifestyle__luxury_hotels__business_inspiration__luxury_living__luxury_brands-removebg-preview.png" loading="lazy" alt=""   height={100}  data-aos="fade-up" className="shadow-xl mb-4 rounded-xl " />
          </div>

        </div>


        <div>

          <img src="/images/pic-removebg-preview.png" loading="lazy"  alt=""/>

        </div>

      </div>




    </div>


  )

}
export default Home