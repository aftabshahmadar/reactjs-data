import react from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

// import { FaHtml5 } from "react-icons/fa6";
// import { IoLogoCss3 } from "react-icons/io5";
// import { IoLogoJavascript } from "react-icons/io5";
// import { GrReactjs } from "react-icons/gr";

import { ReactTyped} from "react-typed";

import profile2 from "./assets/images/profile2.jpeg"
export default function Content() {
  return (
    <>

      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-24 space-y-2'>
            <span className='text-xl'>Welcome to my profile</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, i'm a</h1>
            {/*<span className='text-red-700 font-bold'>Developer</span>*/}
            <ReactTyped className='text-red-700 font-bold'
          strings={["Developer" , "Programmer" , "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className='text-lg'>
            As a front-end developer in the early stages of my career, I am committed to continuously learning and refining my skills to become proficient in modern web development. I have a solid understanding of core technologies such as HTML, CSS, and JavaScript, and I am actively working on improving my knowledge of popular frameworks like React. My passion lies in creating user-friendly, visually appealing, and responsive websites that provide seamless interactions across all devices. I prioritize writing clean, efficient code, while also staying up to date with the latest trends and best practices in the industry. Through hands-on projects and ongoing education, I aim to enhance both my technical expertise and problem-solving abilities, ensuring that I can deliver high-quality digital experiences. My goal is to continue growing as a developer and contribute effectively to any team or project I am a part of..
            </p>
            <br />
            {/* social media app icons*/}
           <div className='flex '>
           <div className='space-y-2'>
              <h1 className='font-bold'>Social medias</h1>
             <ul className='flex space-x-5'>
             <li><FaSquareFacebook className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>
             <li> <FaLinkedin  className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] '/></li>
              <li><FaYoutube className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>
              <li><FaTelegram className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>

             </ul>
            </div>
            {/* <div className='space-y-2 ms-80'>
              <h1 className='font-bold'>Working on</h1>
             <ul className='flex space-x-5'>
             <li><FaHtml5 className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>
             <li> <IoLogoCss3  className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] '/></li>
              <li><GrReactjs className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>
              <li><IoLogoJavascript className='text-2xl cursur-pointer hover:scale-110 duration-200 rounded-full border-[2px] ' /></li>

             </ul>
            </div> */}
           </div>
          </div>
          <div>
          <img src='./src/assets/images/profile2.jpeg' className='w-51 h-51 ms-10 object-cover rounded-full'></img></div>
        </div>
      </div>
      <hr className='-mt-10'/>

    </>
  )
}